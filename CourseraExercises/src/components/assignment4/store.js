import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://davids-restaurant.herokuapp.com';

export default new Vuex.Store({
    state: {
        categories: [],
        items: null,
        pendingRequestsCount: 0
    },
    getters: {
        categories(state) {
            return state.categories;
        },
        items(state) {
            return state.items;
        },
        isLoading(state) {
            return !!state.pendingRequestsCount;
        }
    },
    mutations: {
        setCategories(state, payload) {
            state.categories = payload;
        },
        setItems(state, payload) {
            state.items = payload;
        },
        increaseRequestsCnt(state) {
            state.pendingRequestsCount++;
        },
        decreaseRequestsCnt(state) {
            state.pendingRequestsCount--;
        }
    },
    actions: {
        asyncFetchCategories(context, payload) {
            context.commit('increaseRequestsCnt');

            Vue.http.get(`${BASE_URL}/categories.json`)
            .then(response => { return response.json(); }, response => { 
                context.commit('setCategories', []);
            })
            .then(response => {
                context.commit('decreaseRequestsCnt');

                if (!response) return;

                context.commit('setCategories', response);
            });
        },
        asyncFetchItems(context, payload) {
            context.commit('increaseRequestsCnt');

            Vue.http.get(`${BASE_URL}/menu_items.json`, { params: { category: payload } })
            .then(response => { return response.json(); }, response => { 
                context.commit('setItems', {});
            })
            .then(response => {
                context.commit('decreaseRequestsCnt');

                if (!response) return;

                context.commit('setItems', response);    
            });
        },
        setIsLoading(context, payload) {
            context.commit('setIsLoading', payload);
        }
    }
});