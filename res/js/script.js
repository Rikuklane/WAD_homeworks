//jQuery code that can retrieve/fetch the posts information from the endpoint
// Edit endpoint from: https://www.npoint.io/docs/d8dcf3d01c64345481dd
$(document).ready(function() {
    $.get("https://api.npoint.io/d8dcf3d01c64345481dd", function(posts) {
        for (let post of posts) {
            console.log(post)

            // creating objects
            let post_div = $('<div class= "post">');
            let post_header_div = $('<div class= "post-header">');
            let user_icon = $('<i class="fas fa-user-circle fa-2x"></i>');
            let post_date = $('<i class="post-date"></i>').text(post.date);

            let post_picture = $('<img class="post-picture" alt="feed picture" src="">').attr("src", post.image)

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
            post_div.append(post_picture)
            post_div.append(post_footer_div)

            $('.posts-container').append(post_div)
        }
    })
});
