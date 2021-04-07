import axios from "axios";


type ResponseDataModel = {
    data: any,
    status: number
}

export async function getGeneratedData(page: number = 1): Promise<ResponseDataModel> {
    return await axios.get(`${process.env.REACT_APP_API_URL}/file-generator/`,)
        .then(response => {
            return { data: response.data, status: response.status }
        })
        .catch(error => {
            return { data: 'Something wrong here!!', status: 400 };
        })
}
