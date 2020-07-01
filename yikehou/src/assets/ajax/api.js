import service from './axios';

// 创建axios实例
const api = {
    // 文章
    async Article(_data) {
        const Article = await service.post('/api/v1/article/getListByCateId', _data);
        return Article
    },
    // 文章详情
    async ArticleDetail(_data) {
        const ArticleDetail = await service.post('/api/v1/article/getArticleDetail', _data);
        return ArticleDetail
    },
    // 获取单个栏目
    async one_CateDetail(_data) {
        const one_CateDetail = await service.post('/api/v1/menu/getCateDetail', _data);
        return one_CateDetail
    },
    // 课程分类
    async CateId(_data) {
        const CateId = await service.post('/api/v1/course/getCateList', _data);
        return CateId
    },
    // 课程列表
    async CateList(_data) {
        const CateList = await service.post('/api/v1/course/getCourseList', _data);
        return CateList
    },
    // 年级分类
    async NianjiList(_data) {
        const NianjiList = await service.post('/api/v1/course/getNianjiList', _data);
        return NianjiList
    },
    // 课程分类
    async CateClassify(_data) {
        const CateClassify = await service.post('/api/v1/course/getCateList', _data);
        return CateClassify
    },
    // 设置
    async setting(_data) {
        const setting = await service.post('/api/v1/setting', _data);
        return setting
    },
    // 留言
    async addContact(_data) {
        const addContact = await service.post('/api/v1/contact/addContact', _data);
        return addContact
    },
    // 学生登录
    async studentLogin(_data) {
        const studentLogin = await service.post('/api/auth/studentLogin', _data);
        return studentLogin
    },
};

export default api;