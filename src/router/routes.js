const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        redirect: {name: "Blog"},
        children: [
            {
                path: '/blog',
                name: 'Blog',
                component: () => import('../Home/Blog/Blog'),
                redirect: {name: "BlogList"},
                children: [
                    {
                        path: '/blog/blogList',
                        name: 'BlogList',
                        component: () => import('../Home/Blog/blogList'),
                    },
                    {
                        path: '/blog/addBlog',
                        name: 'AddBlog',
                        component: () => import('../Home/Blog/addBlog'),
                    }
                ]
            },
            {
                path: '/diary',
                name: 'Diary',
                component: () => import('../Home/Diary/Diary'),
                redirect: {name: "DiaryList"},
                children: [
                    {
                        path: '/diary/diaryList',
                        name: 'DiaryList',
                        component: () => import('../Home/Diary/diaryList'),
                    }, {
                        path: '/diary/addDiary',
                        name: 'AddDiary',
                        component: () => import('../Home/Diary/addDiary'),
                    }
                ]
            },
            {
                path: '/friendLink',
                name: 'FriendLink',
                component: () => import('../Home/FriendLink/FriendLink'),
                redirect: {name: "LinkList"},
                children: [
                    {
                        path: '/friendLink/linkList',
                        name: 'LinkList',
                        component: () => import('../Home/FriendLink/linkList'),
                    }, {
                        path: '/friendLink/addLink',
                        name: 'AddLink',
                        component: () => import('../Home/FriendLink/addLink'),
                    }
                ]
            }

        ]
    }, {
        path: '/login',
        name: "Login",
        component: () => import('../views/Login.vue')
    }, {
        path: '/register',
        name: "Register",
        component: () => import('../views/Register.vue')
    }
]
export default routes
