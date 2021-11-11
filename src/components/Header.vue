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


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: beige;
    }
  }
}

</style>
