import axios from 'axios'
const service = axios.create({
    // baseURL: 'http://yikehou.debugk.natapp1.cc', //本地
    baseURL: 'http://yikehou.132.chinaapp.cc', //线上
});
// request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error);
    Promise.reject(error)
});

// response拦截器
service.interceptors.response.use(
    response => {
        let res = response.data;
        return Promise.resolve(response.data)
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
);

export default service