import { createStore } from "vuex";

export default createStore({
  state: {
    pizzas: [],
    basket: [],
    buttons: [],
  },
  getters: {
    getBasketMethod(state) {
      return state.basket;
    },
    checkBasketMethod(state, getters) {
      return;
    },
    getPizzasMethod(state) {
      return state.pizzas;
    },
    getButtonMethod(state){
      return state.buttons
    }
  },
  mutations: {
    pizzasCountIncrement(state, payload) {
      return state.pizzas.find((el) => el.id == payload.value).count++;
    },
    basketPushMethod(state, payload) {
      return (
        state.basket.push(payload.value),
        console.log(payload.value, state.basket)
      );
    },
    basketCountIncrement(state, payload) {
      return (
        state.basket[payload.value].count++, console.log(payload, "indexx")
      );
    },
    pushPizzasMethod(state, payload) {
      return (state.pizzas = payload.value);
    },
    pushButtonsMethod(state, payload) {
      return (state.buttons = payload.value);
    },
  },
  action: {},
  modules: {},
});
