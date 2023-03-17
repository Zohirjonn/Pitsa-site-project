<template>
  <div>
    <Header />
  </div>
  <div>
    <Pitsa @korzina="korzinaMethod" />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Pitsa from "../components/Pitsa.vue";
export default {
  components: {
    Header,
    Pitsa,
  },
  data() {
    return {
      korzinka: [],
    };
  },
  methods: {
    korzinaMethod(item) {
      console.log(item);
      this.korzinka = item;
      console.log(this.korzinka);
    },
  },
};
</script>
<style lang=""></style>
