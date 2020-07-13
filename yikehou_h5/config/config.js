const CONFIG = {};
CONFIG.host = "http://yikehou.132.chinaapp.cc";

CONFIG.url = {
	'Article': '/api/v1/article/getListByCateId', //文章获取
	'advertising': '/api/v1/ad/getList', //广告位
	'CateList': '/api/v1/course/getCourseList', //课程列表
	'NianjiList': '/api/v1/course/getNianjiList', //課程列表
	'CateClassify': '/api/v1/course/getCateList', //課程分类
	'setting': '/api/v1/setting', //设置
	'addContact': '/api/v1/contact/addContact', //留言
	'studentLogin': '/api/auth/studentLogin', //学生登录
	'chooseCourse': '/api/v1/student/chooseCourse', //学生选课
	'studentCateList': '/api/v1/student/getSchoolCourseList', //学生课程列表
	'getHasCourseNumber': '/api/v1/student/getHasCourseNumber', //学生端课程数量
	'getMyCourse': '/api/v1/student/getMyCourse', //学生报课列表
	'FeedBack': '/api/v1/student/addFeedBack', //学生评价
	'courseDetaill': '/api/v1/course/courseDetaill', //课程详情
	'schoolchooseCourse' :'/api/v1/school/chooseCourse', //学校选课
    'schoolLogin':'/api/auth/schoolLogin',//学校登录
	'SchoolcourseNumber':'/api/v1/school/courseNumber',//学校选课数量
    'studentPullDownList':'/api/v1/student/studentPullDownList',//学生下拉框
	'getStudentList':'/api/v1/school/getStudentList',//学生报课情况
	'getStudentDetail' :'/api/v1/student/getStudentDetail', //查看学生信息
    'getMyCoursePluck':'/api/v1/school/getMyCoursePluck',//课程筛选
    'getFeedBack':'/api/v1/school/getFeedBack', //学生反馈信息

};

export default CONFIG
