import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import Aboutus from '@/views/aboutus/aboutus'
import Course from '@/views/course/course'
import CourseDetail from '@/views/course/courseDetail'
import School from '@/views/login/school_login'
import Student from '@/views/login/student_login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/',
            name: 'Aboutus',
            component: Aboutus
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
            name: 'School',
            component: School
        },
        {
            path: '/',
            name: 'Student',
            component: Student
        }
    ]
})