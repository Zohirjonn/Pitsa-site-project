<template>
  <div>
    <Header />
  </div>
  <div>
    <Pizza />
  </div>
</template>
<script>
import Header from "../components/Header/Header.vue";
import Pizza from "../components/Body/Pizza.vue";
export default {
  components: {
    Header,
    Pizza,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang=""></style>
