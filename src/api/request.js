import axios from "axios";

const  service = axios.create({
    baseURL:'http://localhost:8888',
    headers:{
        'Content-Type': 'application/json;charset=UTF-8',
    }
})

service.interceptors.request.use(config =>{
    return config;
}, error => {
    return Promise.reject(error);});

service.interceptors.response.use(response => {
    return Promise.resolve(response.data)
}, error => {
    return Promise.reject(error);});

export default service;