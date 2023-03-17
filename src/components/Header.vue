<template>
  <div class="flex justify-between">
    <div class="flex justify-around space-x-2">
      <button
        class="py-14px bg-white-2 px-7 font-bold rounded-large hover:bg-white-3 hover:text-white-1 duration-300"
        v-for="button in buttons"
        :key="button"
      >
        {{ button }}
      </button>
    </div>
    <FilterPitsa/>
  </div>
</template>
<script>
import FilterPitsa from "./FilterPitsa.vue";
export default {
  components: {
    FilterPitsa,
  },
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
<style lang=""></style>
