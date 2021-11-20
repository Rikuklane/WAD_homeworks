<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style lang="scss">
  #nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #4c51c2;
    opacity: 0.9;
    padding: 10px;

    a {
      font-weight: bold;
      color: #A5A5A5;

      &.router-link-exact-active {
        color: beige;
      }
    }
  }
</style>
