<template>
  <div class="max-w-820px mx-auto">
    <div class="flex justify-between border-b-2 border-white-4 pb-30px">
      <div class="flex justify-center space-x-3 items-center">
        <img
          src="../assets/images/iconfinder_shopping-cart_2561279 1.svg"
          alt=""
        />
        <span class="font-extrabold text-3xl">Корзина</span>
      </div>
      <div
        class="flex justify-center space-x-3 flex-initial w-48 items-center btn"
      >
        <img
          src="../assets/images/iconfinder_trash-2_3324927 1.svg"
          class="btn"
          alt=""
        />
        <span class="text-white-3 hover:text-orange-1">Очистить корзину</span>
      </div>
    </div>
    <div class="cards">
      <div class="item flex justify-between items-center space-x-4">
        <div class="card flex justify-center items-center space-x-4 mt-30px">
          <div class="card-header">
            <img
              src="../../public/images/image 2.svg"
              class="w-20 h-20"
              alt=""
            />
          </div>
          <div class="card-body">
            <h1 class="font-bold text-2xl">Сырный цыпленок</h1>
            <h1 class="text-white-3">тонкое тесто, 26 см.</h1>
          </div>
        </div>
        <div class="calculate flex justify-between items-center space-x-20">
          <div class="space-x-4 flex items-center font-extrabold">
            <img src="../assets/images/Group 35.svg" class="btn" alt="" />
            <p>2</p>
            <img src="../assets/images/Group 34.svg" class="btn" alt="" />
          </div>
          <div class="font-extrabold text-xl">
            <p>770 ₽</p>
          </div>
          <div class="cancel">
            <img src="../assets/images/Group 36.svg" class="btn" alt="" />
          </div>
        </div>
      </div>
      <div class="item flex justify-between items-center space-x-4">
        <div class="card flex justify-center items-center space-x-4 mt-30px">
          <div class="card-header">
            <img
              src="../../public/images/image 2.svg"
              class="w-20 h-20"
              alt=""
            />
          </div>
          <div class="card-body">
            <h1 class="font-bold text-2xl">Сырный цыпленок</h1>
            <h1 class="text-white-3">тонкое тесто, 26 см.</h1>
          </div>
        </div>
        <div class="calculate flex justify-between items-center space-x-20">
          <div class="space-x-4 flex items-center font-extrabold">
            <img src="../assets/images/Group 35.svg" class="btn" alt="" />
            <p>2</p>
            <img src="../assets/images/Group 34.svg" class="btn" alt="" />
          </div>
          <div class="font-extrabold text-xl">
            <p>770 ₽</p>
          </div>
          <div class="cancel">
            <img src="../assets/images/Group 36.svg" class="btn" alt="" />
          </div>
        </div>
      </div>
      <div class="item flex justify-between items-center space-x-4">
        <div class="card flex justify-center items-center space-x-4 mt-30px">
          <div class="card-header">
            <img
              src="../../public/images/image 2.svg"
              class="w-20 h-20"
              alt=""
            />
          </div>
          <div class="card-body">
            <h1 class="font-bold text-2xl">Сырный цыпленок</h1>
            <h1 class="text-white-3">тонкое тесто, 26 см.</h1>
          </div>
        </div>
        <div class="calculate flex justify-between items-center space-x-20">
          <div class="space-x-4 flex items-center font-extrabold">
            <img src="../assets/images/Group 35.svg" class="btn" alt="" />
            <p>2</p>
            <img src="../assets/images/Group 34.svg" class="btn" alt="" />
          </div>
          <div class="font-extrabold text-xl">
            <p>770 ₽</p>
          </div>
          <div class="cancel">
            <img src="../assets/images/Group 36.svg" class="btn" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between font-semibold text-2xl mt-30px">
      <div class="flex space-x-3">
        <p>Всего пицц:</p>
        <p class="font-extrabold">3 шт.</p>
      </div>
      <div class="flex space-x-3">
        <p>Сумма заказа:</p>
        <p class="font-extrabold text-orange-1">900 ₽</p>
      </div>
    </div>
    <div class="flex justify-between mt-40px">
      <RouterLink to="/">
        <button
          class="btn border border-white-3 text-white-3 text-base py-3 px-9 rounded-large gap-2 hover:border-orange-1"
        >
          Вернуться назад
        </button>
      </RouterLink>
      <button
        class="btn border bg-orange-1 border-orange-1 text-white-1 text-base py-3 px-9 rounded-large gap-2"
      >
        Оплатить сейчас
      </button>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {};
</script>
<style lang="scss"></style>
