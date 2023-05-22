<template>
  <div class="small:m-4">
    <div>
      <Header />
    </div>
    <div>
      <Scrollto />
    </div>
    <div>
      <Pizza />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header/Header.vue";
import Pizza from "../components/Body/Pizza.vue";
import Scrollto from "../components/login/scrollto.vue";
export default {
  components: {
    Header,
    Pizza,
    Scrollto,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang=""></style>
