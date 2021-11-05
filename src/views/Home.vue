<template>
<div>
    <div class="search-bar">
        <input type="text" class="search-field">
        <button type="submit" class="search-button">Search</button>
    </div>
    <i id="droplogo" class="fas fa-user-circle fa-2x droplogo"></i>
    <div id="dropdownID" class="dropdown-content">
        <p>Linus Torvalds</p>
        <p>info@linuxfoundation.org</p>
    </div>
    <div class="posts-container"/></div>
</template>



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

.post {
    margin: 5%;
    padding: 10px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 900px;
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

.like-button > i { /* Child Selector can change the inside */
    color: #4c51c2;
}

.like-button + p { /* Adjacent Sibling Selector */
    margin-top: 2%;
    padding: 0;
}

div.like-button ~ p { /* General Sibling Selector */
    display: flex;
    justify-content: left;
    font-family: "Century Gothic", serif;
}
</style>