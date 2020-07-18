//select all titles
const titles = document.querySelectorAll(".title");

//adding CLICK eventListener & ACTIVE class on each title looped through
titles.forEach(function(title){
    title.addEventListener("click",event => {
        const activeTitle = document.querySelector(".title.active");
        title.classList.toggle("active");

        const contentBody = title.nextElementSibling;
        if(title.classList.contains("active")){
            contentBody.style.maxHeight = contentBody.scrollHeight + "px"
        }
        else{
            contentBody.style.maxHeight = 0;
        }
    });
});