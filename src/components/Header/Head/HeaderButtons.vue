<template>
  <div class="flex justify-start items-start flex-wrap gap-2">
    <button
      class="py-14px bg-white-2 px-10 font-bold rounded-large hover:bg-orange-2 duration-100 active:bg-orange-1 active:text-white-2 border border-orange-1"
      v-for="button in buttons"
      :key="button"
    >
      {{ button }}
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      buttons: [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
        // "Все",
        // "Мясные",
        // "Вегетарианская",
        // "Мясные",
        // "Вегетарианская",
        // "Гриль",
        // "Острые",
        // "Гриль",
        // "Острые",
        // "Закрытые",
        // "Мясные",
        // "Вегетарианская",
        // "Все",
        // "Закрытые",
        // "Все",
        // "Гриль",
        // "Острые",
        // "Закрытые",
        // "Все",
        // "Мясные",
        // "Вегетарианская",
        // "Мясные",
        // "Вегетарианская",
        // "Гриль",
        // "Острые",
        // "Гриль",
        // "Острые",
        // "Закрытые",
        // "Мясные",
        // "Вегетарианская",
        // "Все",
        // "Закрытые",
        // "Все",
        // "Гриль",
        // "Острые",
        // "Закрытые",
      ],
    };
  },
};
</script>
<style></style>
