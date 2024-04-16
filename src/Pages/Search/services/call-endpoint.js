import axios from "axios";


export const callEndpoint = () => {
    return axios.get('https://api.talentotech.cymetria.com/api/v1/blockchain/obtener-estudiantes-aprobados')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error in callEndpoint:', error);
            throw error; 
        });
}
