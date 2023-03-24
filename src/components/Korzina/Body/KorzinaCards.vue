<template>
  <div class="cards">
    <div
      class="item flex justify-between items-center space-x-4"
      v-for="item in getBasket"
      :key="item.id"
    >
      <div class="card flex justify-center items-center space-x-4 mt-30px">
        <div class="card-header">
          <img :src="item.imageUrl" class="w-20 h-20" alt="" />
        </div>
        <div class="card-body">
          <h1 class="font-bold text-2xl">{{ item.name }}</h1>
          <h1 class="text-white-3">{{ item.type }}, {{ item.size }} см.</h1>
        </div>
      </div>
      <div class="calculate flex justify-between items-center space-x-20">
        <div class="space-x-4 flex items-center font-extrabold">
          <div class="bg-de-img bg-cover bg-no-repeat p-3 btn"></div>

          <p>{{ item.count }}</p>
          <div class="bg-in-img bg-cover bg-no-repeat p-3 btn"></div>
        </div>
        <div class="font-extrabold text-xl">
          <p>{{ item.price }} ₽</p>
        </div>
        <div class="cancel">
          <div class="bg-clean-img bg-cover bg-no-repeat p-3 btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
  },
};
</script>
<style lang=""></style>
