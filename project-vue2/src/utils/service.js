import axios from 'axios'
import { Message } from "element-ui";

const service = axios.create({
    baseURL: '/api',  //baseurl会自动加到请求地址上
    timeout: 3000
})

//添加请求拦截器
service.interceptors.request.use((config) => {
    //请求之前做些什么（获取并设置token）
    config.headers['token'] = localStorage.getItem('token');
    return config;
}, (err) => {
    return Promise.reject(err)
})

//设置相应拦截器
service.interceptors.response.use((response) => {
    let { status, message } = response.data;
    if (status !== 200) {
        Message({ message: message || 'error', type: 'warning' })
    }
    return response;
}, (err) => {
    return Promise.reject(err)
})

export default service;