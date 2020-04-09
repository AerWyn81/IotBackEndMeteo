const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: "http://52.14.112.188:3000/api/v1/"
});

export default axiosInstance;
