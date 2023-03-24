<template>
  <div class="flex justify-around space-x-2">
    <button
      class="py-14px bg-white-2 px-10 font-bold rounded-large hover:bg-white-3 duration-300 active:bg-black-1 active:text-white-1"
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
      ],
    };
  },
};
</script>
<style></style>
