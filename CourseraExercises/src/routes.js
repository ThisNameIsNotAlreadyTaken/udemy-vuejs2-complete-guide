import Home from './components/Home.vue';
import Assignment1 from './components/assignment1/Assignment1.vue';
import Assignment2 from './components/assignment2/Assignment2.vue';
import Assignment3 from './components/assignment3/Assignment3.vue';
import Assignment4 from './components/assignment4/Assignment4.vue';
import Assignment5 from './components/assignment5/Assignment5.vue';

import Assignment4Routes from './components/assignment4/routes';

export const routes = [
    { path: '/', name: 'home', component: Home, redirect: { name: 'assignment1' }},
    { path: '/assignment1', name: 'assignment1', component: Assignment1 },
    { path: '/assignment2', name: 'assignment2', component: Assignment2 },
    { path: '/assignment3', name: 'assignment3', component: Assignment3 },
    { path: '/assignment4', component: Assignment4, children: Assignment4Routes },
    { path: '/assignment5', name: 'assignment5', component: Assignment5 }
];