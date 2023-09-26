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

    //SECTION 2: Dictionary with Oldagram Posts
    const posts = [
        {
            name: "Vincent van Gogh Test",
            username: "vincey1853",
            location: "Zundert, Netherlands",
            avatar: "images/avatar-vangogh.jpg",
            post: "images/post-vangogh.jpg",
            comment: "just took a few mushrooms lol",
            likes: 21
        }
    ];

    //SECTION 3: Formatting values in dictionary to create the site layout
    avatarID.src = posts[0].avatar;
    nameID.innerText = posts[0].name;
    locationID.innerText = posts[0].location;
    postID.src = posts[0].post;
    usernameID.innerText = posts[0].username;


    //Increments likes when user clicks the heart/like button
    likeBtn.addEventListener("click", function(){

        if(likeBtn.classList.contains("liked")){
            likeBtn.classList.remove("liked")
        } else{
            likeBtn.classList.add("liked")
            totalLikes = posts[0].likes + 1;
            likesID.innerText = totalLikes + " likes"
        }


    })


});

