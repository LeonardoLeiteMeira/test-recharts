import axios from "axios";

const axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "content-type":"application/json",
  }
});

export default axios_instance