import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =  new Vuex.Store({
  state: {
    funds: 10000,
    stocks:[
      {id: 1, name: 'BMW', price: 110, quantity: 0},
      {id: 2, name: 'Google', price: 200, quantity: 0},
      {id: 3, name: 'Apple', price: 250, quantity: 0},
      {id: 4, name: 'Twitter', price: 8, quantity: 0}
    ]
  },
  mutations: {
    endDay: state => {
      state.stocks.forEach(stock => {
        stock.price += Math.floor(Math.random() * 100) -50;
        if(stock.price <=0){
          stock.price = Math.floor(Math.random() * 10)+1;
        }
      });
    },
    buy: (state, order) => {
      state.funds -= order.stockPrice * order.quantity;
      const stocksRecord = state.stocks.find(element => element.id == order.stockId);
      stocksRecord.quantity = order.quantity;
    },
    sell: (state, ordersell) => {
      const stateRecord = state.stocks.find(element => element.id == ordersell.sellId);
      state.funds += stateRecord.price * ordersell.sellQuantity;
      stateRecord.quantity -= ordersell.sellQuantity;
    },
    loadData: state => {
      Vue.http.get('data.json')
      .then(response => response.json())
      .then(data => {
        if(data){
          state.stocks = data.stocks
          state.funds = data.funds
        }
      })
    }
  }
});