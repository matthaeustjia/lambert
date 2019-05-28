<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import "./assets/css/tailwind.css";
import Footer from "@/component/Footer.vue";
import Navbar from "@/component/Navigation.vue";
export default {
  components: {
    Footer,
    Navbar
  }
};
</script>
<style lang="scss">
body {
  background-color: rgb(15, 15, 15);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
