// Desc: 封装axios请求
import axios from "axios";

const service = axios.create({
    baseURL: 'http://127.0.0.1:3333'
});
//添加请求和响应拦截器
service.interceptors.request.use(config => config);
service.interceptors.response.use(res=>{
        return res;
    },err=>{
        return Promise.reject(err);
    });
export default service;