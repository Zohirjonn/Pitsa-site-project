import { createStore } from "vuex";

export default createStore({
  state: {
    pizzas: [],
    basket: [],
  },
  getters: {
    getBasketMethod(state) {
      return state.basket;
    },
    getPizzasMethod(state) {
      return state.pizzas;
    },
    getBasketCountCheck(state) {
      let basket = { count: 0, price: 0 };
      state.basket.forEach((item) => {
        basket.count += item.count;
        basket.price += item.price * item.count;
      });

      return basket;
    },
  },
  mutations: {
    pizzasCountIncrement(state, payload) {
      return state.pizzas.find((el) => el.id == payload.value).count++;
    },
    basketPushMethod(state, payload) {
      return state.basket.push(payload.value);
    },
    basketCountIncrement(state, payload) {
      return state.basket[payload.value].count++;
    },
    pushPizzasMethod(state, payload) {
      return (state.pizzas = payload.value);
    },
    clearBasketMethod(state) {
      return (state.basket = []);
    },
    basketItemMethod(state, payload) {
      let item = payload.value;
      let type = payload.type;
      let index = state.basket.findIndex(
        (el) => el.id == item.id && el.size == item.size && el.type == item.type
      );
      if (type == "increment") {
        return state.basket[index].count++;
      } else if (type == "decrement") {
        return state.basket[index].count--;
      }
    },

    basketItemDeleteMethod(state, payload) {
      let item = payload.value;
      let res = state.basket.filter(
        (el) => el.id != item.id || el.size != item.size || el.type != item.type
      );
      return (state.basket = res);
    },
  },
  action: {},
  modules: {},
});
