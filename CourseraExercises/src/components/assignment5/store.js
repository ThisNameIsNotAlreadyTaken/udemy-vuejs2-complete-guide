import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://davids-restaurant.herokuapp.com';

export default new Vuex.Store({
    state: {
        isLoading: false,
        info: null,
        items: [],
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        info(state) {
            return state.info;
        },
        items(state) {
            return state.items;
        }
    },
    mutations: {
        setInfo(state, payload) {
            state.info = payload;
        },
        setItems(state, payload) {
            state.items = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        setInfo(context, payload) {
            context.commit('setInfo', payload.data);
            payload.callback();
        },
        asyncFetchItems(context, payload) {
            context.commit('setIsLoading', true);

            Vue.http.get(`${BASE_URL}/menu_items.json`)
            .then(response => { return response.json(); }, response => { 
                context.commit('setItems', []);
                context.commit('setIsLoading', false);
            })
            .then(response => {
                context.commit('setIsLoading', false);

                if (!response) return;

                context.commit('setItems', response.menu_items);    
            });
        }
    }
});