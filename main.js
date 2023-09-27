document.addEventListener("DOMContentLoaded", function () {
    // SECTION 1: Variables Assigned
    const avatarID = document.getElementById("avatar-el");
    const nameID = document.getElementById("name-el");
    const locationID = document.getElementById("location-el");
    const postID = document.getElementById("post-el");
    const usernameID = document.getElementById("username-el");
    const likesID = document.getElementById("likes-el");
    const likeBtn = document.querySelector(".like-btn");
    let totalLikes = 0;
    const commentID = document.getElementById("comment-el");

    //SECTION 2: Dictionary with Oldagram Posts
    const posts = [
        {
            name: "Vincent van Gogh",
            username: "vincey1853",
            location: "Zundert, Netherlands",
            avatar: "images/avatar-vangogh.jpg",
            post: "images/post-vangogh.jpg",
            comment: "just took a few mushrooms lol",
            likes: 21
        }
    ];

    //SECTION 3: Formatting values in dictionary to create the site layout
    for(i=0 ;i < posts.length ; i++){
        avatarID.src = posts[i].avatar;
        nameID.innerText = posts[i].name;
        locationID.innerText = posts[i].location;
        postID.src = posts[i].post;
        usernameID.innerText = posts[i].username;
        likesID.innerText = posts[i].likes + " likes"
        totalLikes = posts[i].likes 
        commentID.innerText = posts[i].comment;
        
    }

    //Increments likes when user clicks the heart/like button
    likeBtn.addEventListener("click", function(){

        if(likeBtn.classList.contains("liked")){
            likeBtn.classList.remove("liked") 
            totalLikes = totalLikes - 1;
            likesID.innerText = totalLikes + " likes"
        } else{
            likeBtn.classList.add("liked")
            totalLikes = totalLikes + 1;
            likesID.innerText = totalLikes + " likes"
        }

    })
});
