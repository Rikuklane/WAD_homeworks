<template id="app">
  <Header class="header"> </Header>
  <router-view class="content"> </router-view>
  <Footer> </Footer>
</template>
<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    name: "App",
    components: { Footer, Header },
  };
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .header + .content {
    padding: 50px;
  }
</style>
