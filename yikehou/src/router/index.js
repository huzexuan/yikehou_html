import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import Aboutus from '@/views/aboutus/aboutus'
import JoinHands from '@/views/aboutus/joinHands'
import Course from '@/views/course/course'
import CourseDetail from '@/views/course/courseDetail'
import New from '@/views/new/new'
import School from '@/views/login/school_login'
import Student from '@/views/login/student_login'
import Password from '@/views/login/password'
import StudentIndex from '@/views/student/index'
import MeCourse from '@/views/student/meCourse'
import MeCourseDel from '@/views/student/meCourseDel'
import Feedback from '@/views/student/feedback'
import SchoolIndex from '@/views/school/index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'SchoolIndex',
            component: SchoolIndex
        }, {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/',
            name: 'Aboutus',
            component: Aboutus
        }, {
            path: '/',
            name: 'JoinHands',
            component: JoinHands
        },
        {
            path: '/',
            name: 'Course',
            component: Course
        },
        {
            path: '/',
            name: 'CourseDetail',
            component: CourseDetail
        }, {
            path: '/',
            name: 'New',
            component: New
        }, {
            path: '/',
            name: 'School',
            component: School
        },
        {
            path: '/',
            name: 'Student',
            component: Student
        },
        {
            path: '/',
            name: 'Password',
            component: Password
        },
        {
            path: '/',
            name: 'StudentIndex',
            component: StudentIndex
        },
        {
            path: '/',
            name: 'MeCourse',
            component: MeCourse
        }, {
            path: '/',
            name: 'MeCourseDel',
            component: MeCourseDel
        },
        {
            path: '/',
            name: 'Feedback',
            component: Feedback
        }

    ]
})