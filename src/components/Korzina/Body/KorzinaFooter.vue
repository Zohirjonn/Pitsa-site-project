<template>
  <div class="flex justify-between font-semibold text-2xl mt-30px">
    <div class="flex space-x-3">
      <p>Всего пицц:</p>
      <p class="font-extrabold">{{ getBasket.length }} шт.</p>
    </div>
    <div class="flex space-x-3">
      <p>Сумма заказа:</p>
      <p class="font-extrabold text-orange-1">900 ₽</p>
    </div>
  </div>
  <div class="flex justify-between mt-40px">
    <RouterLink to="/">
      <button
        class="btn border border-white-3 text-white-3 text-base py-3 px-8 rounded-large gap-2 hover:border-orange-1 space-x-2"
      >
        <span class="bg-path-img bg-no-repeat bg-fill px-2 bg-center"></span>
        <span>Вернуться назад</span>
      </button>
    </RouterLink>
    <button
      class="btn border bg-orange-1 border-orange-1 text-white-1 text-base py-3 px-9 rounded-large gap-2"
    >
      Оплатить сейчас
    </button>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
  },
};
</script>
<style></style>
