import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.hinovamobile.com.br/ProvaConhecimentoWebApi',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
