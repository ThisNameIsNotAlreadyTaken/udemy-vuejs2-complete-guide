const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, payload) {
        const record = state.stocks.find(el => el.id === payload.stockId);
        if (record) {
            record.quantity += payload.quantity;
        } else {
            state.stocks.push({
                id: payload.stockId,
                quantity: payload.quantity
            });
        }
        state.funds -= payload.stockPrice * payload.quantity;
    },
    'SELL_STOCK'(state, payload) { 
        const record = state.stocks.find(el => el.id === payload.stockId);
        if (record.quantity > payload.quantity) {
            record.quantity -= payload.quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += payload.stockPrice * payload.quantity;
    },
    'SET_PORTFOLIO'(state, payload) {
        state.funds = payload.funds;
        state.stocks = payload.stockPortfolio || [];
    }
};

const actions = {
    sellStock(context, payload) {
        context.commit('SELL_STOCK', payload);
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
       return state.stocks.map(stock => {
           const record = getters.stocks.find(el => el.id == stock.id);
           return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
           };
       });
    },
    funds: state => {
        return state.funds;
     }
};

export default {
    state,
    mutations,
    actions,
    getters
};