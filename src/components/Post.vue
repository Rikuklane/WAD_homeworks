<template>
  <div class="post">
    <div class="post-header">
      <i class="fas fa-user-circle fa-2x"></i>
      <i class="post-date">{{ date }}</i>
    </div>
    <img class="post-picture" alt="now pic work? no? ok" src={{image}}>
    <div class="post-footer">
      <div class="like-button">
        <i class="fas fa-thumbs-up fa-lg" @click="increment"></i>
        <p>{{ count }}</p>
      </div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["date", "author", "image", "text", "likes"],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
.post {
  margin: 2%;
  padding: 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 700px;
  background-color: white;
}

.post-header {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}

.post-date {
  color: grey;
  font-size: small;
}

.post-picture {
  max-width: 100%;
  max-height: 100%;
}

.post-footer {
  display: flex;
  flex-direction: column-reverse;
  justify-content: left;
  padding: 10px 10px;
}

.like-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.like-button > i {
  /* Child Selector can change the inside */
  color: #4c51c2;
}

.like-button + p {
  /* Adjacent Sibling Selector */
  margin-top: 2%;
  padding: 0;
}

div.like-button ~ p {
  /* General Sibling Selector */
  display: flex;
  justify-content: left;
  font-family: "Century Gothic", serif;
}


</style>