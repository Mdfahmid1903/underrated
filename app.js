const hamburger = document.getElementById("hamburger");
const mobilemenu = document.getElementById("mobilemenu");
const overlay = document.getElementById("overlay");
const closebtn = document.getElementById("closebtn");

hamburger.addEventListener("click", () => {
    mobilemenu.classList.remove("hide");
    overlay.classList.remove("hide");
});

closebtn.addEventListener("click", () => {
    mobilemenu.classList.add("hide");
    overlay.classList.add("hide");
});

overlay.addEventListener("click", () => {
    mobilemenu.classList.add("hide");
    overlay.classList.add("hide");
});