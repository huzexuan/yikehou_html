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
    // 学校登录
    async schoolLogin(_data) {
        const schoolLogin = await service.post('/api/auth/schoolLogin', _data);
        return schoolLogin
    },
    // 广告位
    async advertising(_data) {
        const advertising = await service.post('/api/v1/ad/getList', _data);
        return advertising
    },
    // 课程详情
    async courseDetaill(_data) {
        const courseDetaill = await service.post('/api/v1/course/courseDetaill', _data);
        return courseDetaill
    },
    // 学生端课程数量
    async getHasCourseNumber(_data) {
        const getHasCourseNumber = await service.post('/api/v1/student/getHasCourseNumber', _data);
        return getHasCourseNumber
    },
    // 所报课程
    async getMyCourse(_data) {
        const getMyCourse = await service.post('/api/v1/student/getMyCourse', _data);
        return getMyCourse
    },
    // 学生信息反馈
    async FeedBack(_data) {
        const FeedBack = await service.post('/api/v1/student/addFeedBack', _data);
        return FeedBack
    },
    // 立即选课
    async chooseCourse(_data) {
        const chooseCourse = await service.post('/api/v1/student/chooseCourse', _data);
        return chooseCourse
    },
    // 学生选课列表
    async studentCateList(_data) {
        const studentCateList = await service.post('/api/v1/student/getSchoolCourseList', _data);
        return studentCateList
    },
    // 学校选课
    async schoolchooseCourse(_data) {
        const schoolchooseCourse = await service.post('/api/v1/school/chooseCourse', _data);
        return schoolchooseCourse
    },
    // 查看学生信息
    async getStudentDetail(_data) {
        const getStudentDetail = await service.post('/api/v1/student/getStudentDetail', _data);
        return getStudentDetail
    },
    // 导入学生信息
    async uploadExcel(_data) {
        const uploadExcel = await service.post('/api/v1/school/uploadExcel', _data);
        return uploadExcel
    },
    // 学校设置课程列表
    async getMyCourseList(_data) {
        const getMyCourseList = await service.post('/api/v1/school/getMyCourseList', _data);
        return getMyCourseList
    },
    // 课程筛选
    async getMyCoursePluck(_data) {
        const getMyCoursePluck = await service.post('/api/v1/school/getMyCoursePluck', _data);
        return getMyCoursePluck
    },
    // 课程热度
    async seeDegree(_data) {
        const seeDegree = await service.post('api/v1/school/reduList', _data);
        return seeDegree
    },
};

export default api;