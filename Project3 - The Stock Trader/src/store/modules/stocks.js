import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, payload) {
        state.stocks = stocks;
    },
    'RANDOM_STOCKS'(state) {
        state.stocks.forEach(el => {
            el.price = Math.round(el.price *(1 +  Math.random() - 0.5));
        });
    }
};

const actions = {
    buyStock(context, payload) {
        context.commit('BUY_STOCK', payload);
    },
    initStocks(context, payload) {
        context.commit('SET_STOCKS', stocks);
    },
    randomizeStocks(context, payload) {
        context.commit('RANDOM_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};