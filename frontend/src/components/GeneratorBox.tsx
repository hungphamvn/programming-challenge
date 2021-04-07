import React, { useState, useContext } from 'react';
import { GetDataFailure, GetDataSuccess } from '../redux/mainAction';
import { MainContext } from '../redux/MainReducer';
import { getGeneratedData } from '../services/API';
import { Button, Label, Text } from './GeneratorBoxStyled';
import { ReportBox } from './ReportBox';

export const GeneratorBox: React.FC = () => {
    const { state, dispatch } = useContext(MainContext);

    const [isLoading, setIsLoading] = useState(false);
    const [isDisplayReport, setDisplayReport] = useState(false);

    const handleGenerate = async () => {
        setIsLoading(true);
        setDisplayReport(false);

        const result = await getGeneratedData();

        if (result?.status === 200) {
            dispatch(GetDataSuccess(result?.data));
        } else {
            dispatch(GetDataFailure("Something wrong here, please try again!!"));
        }

        setIsLoading(false);
    }

    const handleReport = () => {
        setDisplayReport(true);
    }


    return (
        <div>
            {state.message ? <Text>{state.message}</Text> : ""}
            <Button onClick={handleGenerate} disabled={isLoading}>Generate</Button>
            <p><Label>Link:</Label> {isLoading ? 'Generating...' : state.data?.download_link ? <a href={state.data?.download_link}>Click here to download</a> : null}</p>
            <Button onClick={handleReport} disabled={isLoading ? true : state.data?.report_statistics ? false : true}>Report</Button>
            {isDisplayReport && state.data?.report_statistics &&
                <ReportBox {...state.data.report_statistics} />
            }
        </div>
    )
}