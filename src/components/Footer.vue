<template>
  <app-footer id="footer">
    <router-link to="/contact" class="contact-text"> Contact </router-link>
  </app-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #4c51c2;
  text-align: center;
}
.contact-text {
  color: beige;
  font-weight: bold;
}
</style>
