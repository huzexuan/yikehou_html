import axios from 'axios'
const service = axios.create({
    baseURL: 'http://yikehou.debugk.natapp1.cc',
});
// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    return config
}, error => {
    // Do something with request error
    console.log(error); // for debug
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