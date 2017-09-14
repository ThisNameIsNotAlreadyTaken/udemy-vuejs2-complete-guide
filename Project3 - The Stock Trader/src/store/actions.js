import Vue from 'vue';

export const loadData = (context) => {
    Vue.http.get('data.json')
    .then((res) => res.json())
    .then(res => {
        if (res) {
            const stocks = res.stocks;
            const funds = res.funds;
            const stockPortfolio = res.stockPortfolio;

            const portfolio = {
                stockPortfolio,
                funds
            };

            context.commit('SET_STOCKS', stocks);
            context.commit('SET_PORTFOLIO', portfolio);
        }
    });
};