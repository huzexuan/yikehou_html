import Vue from 'vue'
import Router from 'vue-router'
import indexUpload from '@/views/index/upload'
import Index from '@/views/index/index'
import Aboutus from '@/views/aboutus/aboutus'
import JoinHands from '@/views/aboutus/joinHands'
import Course from '@/views/course/course'
import CourseDetail from '@/views/course/courseDetail'
import New from '@/views/new/new'
import NewDes from '@/views/new/newDes'
import School from '@/views/login/school_login'
import Student from '@/views/login/student_login'
import Password from '@/views/login/password'
import StudentIndex from '@/views/student/index'
import MeCourse from '@/views/student/meCourse'
import MeCourseDel from '@/views/student/meCourseDel'
import Feedback from '@/views/student/feedback'
import SchoolIndex from '@/views/school/index'
import SeeDegree from '@/views/school/seeDegree'
import SeeCondition from '@/views/school/seeCondition'
import Information from '@/views/school/information'
import SchoolSet from '@/views/school/set'
import Coupleback from '@/views/school/coupleback'
import Account from '@/views/school/account'
import schoolMeCourseDel from '@/views/school/meCourseDel'
import Increase from '@/views/school/increase'

Vue.use(Router)
const originalPush = Vue.prototype.push
Vue.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes: [{
            path: '/indexUpload',
            name: 'indexUpload',
            component: indexUpload,
            meta: {
                title: '益课后'
            }
        },
        {
            path: '/Index',
            name: 'Index',
            component: Index,
            meta: {
                title: '益课后'
            }
        },
        {
            path: '/',
            name: 'Aboutus',
            component: Aboutus,
            meta: {
                title: '益课后-关于我们'
            }
        }, {
            path: '/',
            name: 'JoinHands',
            component: JoinHands,
            meta: {
                title: '益课后-合作共赢'
            }
        },
        {
            path: '/',
            name: 'Course',
            component: Course,
            meta: {
                title: '益课后-选课中心'
            }
        },
        {
            path: '/',
            name: 'CourseDetail',
            component: CourseDetail,
            meta: {
                title: '益课后-课程详情'
            }
        }, {
            path: '/',
            name: 'New',
            component: New,
            meta: {
                title: '益课后-新闻中心'
            }
        }, {
            path: '/',
            name: 'NewDes',
            component: NewDes,
            meta: {
                title: '益课后-新闻详情'
            }
        }, {
            path: '/',
            name: 'School',
            component: School,
            meta: {
                title: '益课后-学校登录'
            }
        },
        {
            path: '/',
            name: 'Student',
            component: Student,
            meta: {
                title: '益课后-学生登录'
            }
        },
        {
            path: '/',
            name: 'Password',
            component: Password,
            meta: {
                title: '益课后-修改密码'
            }
        },
        {
            path: '/StudentIndex',
            name: 'StudentIndex',
            component: StudentIndex,
            meta: {
                title: '益课后学生端-首页'
            }
        },
        {
            path: '/',
            name: 'MeCourse',
            component: MeCourse,
            meta: {
                title: '益课后学生端-我的课程'
            }
        }, {
            path: '/',
            name: 'MeCourseDel',
            component: MeCourseDel,
            meta: {
                title: '益课后学生端-课程详情'
            }
        },
        {
            path: '/',
            name: 'Feedback',
            component: Feedback,
            meta: {
                title: '益课后学生端-反馈中心'
            }
        },
        {
            path: '/SchoolIndex',
            name: 'SchoolIndex',
            component: SchoolIndex,
            meta: {
                title: '益课后学校端-首页'
            }
        },
        {
            path: '/',
            name: 'SeeDegree',
            component: SeeDegree,
            meta: {
                title: '益课后学校端-课程热度排名'
            }
        },
        {
            path: '/',
            name: 'SeeCondition',
            component: SeeCondition,
            meta: {
                title: '益课后学校端-报课情况'
            }
        },
        {
            path: '/',
            name: 'Information',
            component: Information,
            meta: {
                title: '益课后学校端-学生信息'
            }
        },
        {
            path: '/',
            name: 'SchoolSet',
            component: SchoolSet,
            meta: {
                title: '益课后学校端-课程设置'
            }
        },
        {
            path: '/',
            name: 'Coupleback',
            component: Coupleback,
            meta: {
                title: '益课后学校端-反馈信息'
            }
        }, {
            path: '/',
            name: 'Account',
            component: Account,
            meta: {
                title: '益课后学校端-开设学生账号'
            }
        }, {
            path: '/',
            name: 'schoolMeCourseDel',
            component: schoolMeCourseDel,
            meta: {
                title: '益课后学校端-课程详情'
            }
        }, {
            path: '/',
            name: 'Increase',
            component: Increase,
            meta: {
                title: '益课后学校端-开设学生账号'
            }
        }

    ],
    mode: 'history',
    base: '/',
})