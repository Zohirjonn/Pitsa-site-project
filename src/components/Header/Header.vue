<template>
  <div class="flex justify-between mb-35px">
    <HeaderButtons />
    <FilterPitsa />
  </div>
</template>
<script>
import HeaderButtons from "./Head/HeaderButtons.vue";
import FilterPitsa from "./Head/FilterPitsa.vue";
export default {
  components: {
    HeaderButtons,
    FilterPitsa,
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
