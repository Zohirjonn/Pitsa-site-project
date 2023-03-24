<template>
  <div class="max-w-820px mx-auto">
    <KorzinkaHead />
    <KorzinkaCards />
    <KozinkaFooter />
  </div>
</template>
<script>
import KorzinkaHead from "./Body/KorzinaHead.vue";
import KorzinkaCards from "./Body/KorzinaCards.vue";
import KozinkaFooter from "./Body/KorzinaFooter.vue";

export default {
  components: {
    KorzinkaHead,
    KorzinkaCards,
    KozinkaFooter,
  },
  methods: {
    decrementMethod() {},
    incrementMethod() {},
  },
};
</script>
<style lang="scss"></style>
