import AllProduct from '../components/Products/AllProduct.vue';
import CreateProduct from '../components/Products/CreateProduct.vue';
import EditProduct from '../components/Products/EditProduct.vue';

import PostsIndex from '../components/Posts/Index.vue'
import PostsCreate from '../components/Posts/Create.vue'
import PostsEdit from '../components/Posts/Edit.vue'

export const routes = [
    // {
    //     name: 'home',
    //     path: '/',
    //     component: AllProduct
    // },
    // {
    //     name: 'create',
    //     path: '/create',
    //     component: CreateProduct
    // },
    // {
    //     name: 'edit',
    //     path: '/edit/:id',
    //     component: EditProduct
    // },
    {
        path: '/',
        component: PostsIndex,
        name: 'posts.index'
    },
    {
        path: '/create',
        component: PostsCreate,
        name: 'posts.create'
    },
    {
        path: '/edit/:id',
        component: PostsEdit,
        name: 'posts.edit'
    },
];
