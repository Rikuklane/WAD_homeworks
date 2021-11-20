<template>
  <app-footer id="footer">
    <router-link to="/contact" class="contact-text"> Contact </router-link>
    <div class="copyright">Copyright © Boomers. All Memes Reserved</div>
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
    padding: 3px;
    opacity: 0.9;
    color: #C7C8B7;

    a {
      font-weight: bold;
      color: #C7C8B7;
    }
  }
  .copyright {
    font-size: smaller;
  }
</style>
