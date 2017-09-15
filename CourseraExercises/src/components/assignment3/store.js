import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: []
    },
    getters: {
        items(state) {
            return state.items;
        }
    },
    mutations: {
        updateItems(state, payload) {
            state.items = payload;
        },
        removeItem(state, payload) {
            state.items.splice(payload, 1);
        }
    },
    actions: {
        asyncUpdateItems(context, payload) {
            Vue.http.get('https://davids-restaurant.herokuapp.com/menu_items.json')
            .then(response => { return response.json()}, response => { 
                const items = [];

                context.commit('updateItems', items);
                payload.callback(items); 
            })
            .then(response => {
                if (!response) return;

                const items = response.menu_items.filter(item => item.description.toLowerCase().indexOf(payload.searchTerm) !== -1);
                context.commit('updateItems', items);

                payload.callback(items);      
            });
        },
        removeItem(context, payload) {
            context.commit('removeItem', payload);
        }
    }
})