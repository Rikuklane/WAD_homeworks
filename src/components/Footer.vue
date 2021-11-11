<template>
  <app-footer id="footer">
    <router-link to="/contact">| Contact |</router-link>
  </app-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
#footer {
  position: absolute;
  bottom: 0;
  height: 60px;
}
</style>
