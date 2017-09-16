import Start from './components/Start.vue';
import Categories from './components/menu/Categories.vue';

import CategoriesRoutes from './components/menu/routes';

export default [
    { path: '/', name: 'assignment4', redirect: { name: 'welcome' }},
    { path: 'welcome', name: 'welcome', component: Start },
    { path: 'categories', name: 'categories', component: Categories, children: CategoriesRoutes }
];