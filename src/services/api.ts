import axios from 'axios'
//configuracoes de conexao com a api
export const api = axios.create({
    baseURL: 'http://192.168.55.107:3333'
})