<template>
  <div class="flex justify-between mb-35px items-start">
    <HeaderButtons class="flex-4"/>
    <FilterPitsa class="flex-1"/>
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
