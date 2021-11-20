<template>
  <div>
    <div class="search-bar">
      <input type="text" class="search-field"/>
      <button type="submit" class="search-button">Search</button>
      <i id="droplogo" class="fas fa-user-circle fa-2x droplogo"></i>
      <div id="dropdownID" class="dropdown-content">
        <p>Linus Torvalds</p>
        <p>info@linuxfoundation.org</p>
      </div>
    </div>
    <div class="posts-container">
      <Post v-for="post in posts"
            :key="post.id"
            :date="post.date"
            :text="post.text"
            :image = "post.image">
      </Post>
    </div>
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
  .search-button:hover {
    color: white;
  }

  /* css for the button "search"*/
  .search-button {
    height: 100%;
    width: 30%;
    background-color: #4c51c2;
    color: lightgray;
    max-width: 200px;
  }

  /* css for the users dropdown menu */
  .dropdown-content {
    background-color: white;
    right: 0px;
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
