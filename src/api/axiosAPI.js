import axios from "axios";


const Url='https://5d78df43a8c2710014986696.mockapi.io/api';

const AxiosAPI = (endpoint, method = 'GET', body) => {
    
        return axios({
            method: method,
            url: `${Url}/${endpoint}`,
            data: body
        }).catch((error)=>{
            console.log(error);
        })
    
    
}

export default AxiosAPI;
