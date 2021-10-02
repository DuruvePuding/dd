const colors = document.querySelectorAll(".colors div");
const shoe = document.querySelector("img");
const submit = document.querySelector(".submit");

colors.forEach((item) => {
    item.style.background = item.getAttribute("data-color");
    

});
