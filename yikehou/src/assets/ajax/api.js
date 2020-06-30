import service from './axios';

// 创建axios实例
const api = {
    async indexNew(_data) {
        const indexNew = await service.post('/api/v1/article/getListByCateId', _data);
        return indexNew
    },
    async indexNew_des(_data) {
        const indexNew_des = await service.post('/api/v1/article/getArticleDetail', _data);
        return indexNew_des
    }
};

export default api;