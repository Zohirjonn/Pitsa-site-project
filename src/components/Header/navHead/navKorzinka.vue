<template>
  <div
    class="bg-orange-1 text-white-1 flex justify-around w-40 py-14px px-3 rounded-large items-center btn"
  >
    <span class="flex flex-nowrap px-2">900 ₽</span>
    <div class="bg-t-1 py-3 px-1px bg-cover bg-no-repeat"></div>
    <!-- <img src="../../../../public/images/__.svg" alt="" /> -->
    <div class="flex justify-between space-x-1 px-2 items-center">
      <div
        class="text-white-1 hover:cursor-pointer hover:scale-110 bg-top-korz p-3 bg-no-repeat bg-cover"
      ></div>
      <!-- <img
        src="../../../../public/images/korzina.svg"
        
        alt="..."
      /> -->
      <span>{{ getBasket.length == 0 ? "" : getBasket.length }}</span>
      <!-- <span>{{ getBasket }}</span> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
  },
};
</script>
<style lang=""></style>
