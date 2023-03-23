import { createStore } from "vuex";

export default createStore({
  state: {
    pizzas: [],
    basket: [],
  },
  getters: {},
  mutations: {
    countIncrement(state, payload) {
      return state.pizzas.find((el) => el.id == payload.value).count++;
    },
    pushMethod(state, payload){
      return state.basket.push(payload.value)
    }
  },
  action: {},
  modules: {},
});
