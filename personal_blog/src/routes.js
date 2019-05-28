import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

Vue.use(Router)

export default new Router({
    routes: [
        { path: "/", component: ShowBlogs },
        { path: "/add", component: AddBlog },
        { path: "/blog/:id", component: SingleBlog }
    ]
})