<template>
  <div>
    <div class="search-bar">
      <input type="text" class="search-field"/>
      <button type="submit" class="button" id="search-button">Search</button>
      <i id="droplogo" class="fas fa-user-circle fa-2x droplogo"></i>
    </div>
    <div class="posts-container">
      <Post v-for="post in posts"
            :key = "post.key"
            :post_id = "post.post_id"
            :date = "post.date"
            :author = "post.author"
            :text = "post.text"
            :image = "post.image"
            :likes = "post.likes">
      </Post>
    </div>
    <button @click="toZero" class="button" id="reset-button">Reset All Likes</button>
  </div>
</template>
<script>
  import Post from "../components/Post";

  export default {
    components: {Post},
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    methods: {
      toZero(){
        let i = 0;
          while (i < (this.$store.state.posts).length ){
            this.$store.state.posts[i].likes = 0
            i+= 1
          }
        }
      }
  }
</script>
<style>
  /* css for the top part of the index page*/
  .search-bar {
    height: 30px;
    min-width: 75%;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  /* css for the search input bar */
  .search-field {
    height: 100%;
    width: 69%;
  }

  /* css for the button "search", while hovering over it */
  .button:hover {
    color: white;
  }

  /* css for the button "search"*/
  .button {
    background-color: #4c51c2;
    color: lightgray;
  }

  #search-button{
    height: 100%;
    width: 30%;
    max-width: 200px;
  }

  #reset-button {
    height: 50px;
    width: 200px;
  }

  /* css for the users dropdown menu */
  .dropdown-content {
    background-color: white;
    right: 0;
    top: 60px;
    position: fixed;
    display: none;
    text-align: left;
    text-indent: 5px;
    font-family: cursive;
  }

  /* css for the containers of posts and their attributes*/
  .posts-container {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    justify-content: center;
    align-items: center;
  }
</style>
