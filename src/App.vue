<template>
  <div class="text-black-1 text-base mx-auto max-w-1340px mb-24">
    <div class="flex justify-between border-b-2 border-white-4 py-40px mb-40px">
      <RouterLink to="/">
        <Navtop />
      </RouterLink>
      <RouterLink to="/korzina">
        <Korzina />
      </RouterLink>
    </div>
    <RouterView />
  </div>
  <div>
    <Footer />
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navtop from "./components/Navtop.vue";
import Korzina from "./components/navKorzinka.vue";
import Loader from "./components/Loader.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navtop,
    Korzina,
    Loader,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
