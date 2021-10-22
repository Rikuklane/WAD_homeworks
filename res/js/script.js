//jQuery code that can retrieve/fetch the posts information from the endpoint
// Edit endpoint from: https://www.npoint.io/docs/ca4f889b085ef8f24474


$(document).ready(function() {

    let droplogo = document.getElementById('droplogo')
    let content = document.querySelector('.dropdown-content')

    //listner for the users dropdown menu, shows/hides depending if already shown/hidden
    droplogo.addEventListener('click', () => {
        if (content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "";
        }
    })
    $.get("https://api.npoint.io/ca4f889b085ef8f24474", function(posts) {
    //$.getJSON("res/json/posts.json", function(posts) {
        for (let post of posts) {
            console.log(post)
            // creating objects
            let post_div = $('<div class= "post">');
            let post_header_div = $('<div class= "post-header">');
            let user_icon = $('<i class="fas fa-user-circle fa-2x"></i>');
            let post_date = $('<i class="post-date"></i>').text(post.date);

            //if the post does have an image then get the image from the URL
            if (post.image !== "") {
                let post_picture = $('<img class="post-picture" alt="feed picture" src="">').attr("src", post.image)
                post_div.append(post_picture)
            }

            let post_footer_div = $('<div class= "post-footer">');
            let like_button_div = $('<div class= "like-button">');
            let like_button = $('<i class="fas fa-thumbs-up fa-lg"></i>');
            let post_text = $('<p></p>').text(post.text)

            // creating the post
            like_button_div.append(like_button)
            post_footer_div.append(like_button_div)
            post_footer_div.append(post_text)

            post_header_div.append(user_icon)
            post_header_div.append(post_date)

            post_div.append(post_header_div)
            post_div.append(post_footer_div)

            //appending the post to the page
            $('.posts-container').append(post_div)
        }
    })
});
