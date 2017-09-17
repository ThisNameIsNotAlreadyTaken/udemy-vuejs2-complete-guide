import Start from './components/Start.vue';
import UserInfo from './components/UserInfo.vue';
import SignUp from './components/SignUp.vue';

export default [
    { path: '/', name: 'assignment5', redirect: { name: 'start' }},
    { path: 'start', name: 'start', component: Start },
    { path: 'myinfo', name: 'myinfo', component: UserInfo },
    { path: 'signup', name: 'signup', component: SignUp },
];