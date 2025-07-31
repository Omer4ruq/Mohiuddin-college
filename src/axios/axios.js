import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://mpih.eduhubbd.online/', // API base URL
  timeout: 5000, 
});

export default Axios;
