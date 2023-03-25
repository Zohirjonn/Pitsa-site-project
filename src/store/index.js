import { createStore } from "vuex";

export default createStore({
  state: {
    pizzas: [],
    basket: [],
    options: "3",
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
    getOptions(state) {
      return state.options;
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
        if (state.basket[index].count == 0) {
          return;
        }
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
    filterBasket(state, payload) {
      return (state.options = payload.value);
      // state.pizzas = state.pizzas.sort(
      //   (a, b) => a.name.toUpperCase() - b.name.toUpperCase()
      // );
    },
    changePriceMethod(state, payload) {
      let id = payload.value[0];
      let size = payload.value[1];
      let pizzaItem = state.pizzas.find((el) => el.id == id);
      let index = state.pizzas.findIndex((el) => el.id == id);
    },
  },
  action: {},
  modules: {},
});
