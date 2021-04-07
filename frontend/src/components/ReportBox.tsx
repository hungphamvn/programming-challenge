import React, { memo } from 'react';
import { ReportData } from '../redux/model';
import { Text, Section } from './GeneratorBoxStyled'


export const ReportBox: React.FC<ReportData> = memo((data: ReportData) => (
    <Section>
        <Text>Alphebetical strings: {data.ALPHABETICAL_STRINGS}</Text>
        <Text>Alphenumerics: {data.ALPHANUMERICS}</Text>
        <Text>Integers: {data.INTEGERS}</Text>
        <Text>Real numbers: {data.REAL_NUMBERS}</Text>
    </Section>
));