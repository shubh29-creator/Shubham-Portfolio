console.log("Portfolio JS Successfully Connected!");

document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to Shubham's Portfolio!");
});

window.addEventListener("scroll", () => {
    console.log("User is scrolling...");
});

function greet() {
    console.log("Have a great day, Shubham!");
}
greet();


// ------------------------------
// DARK / LIGHT MODE TOGGLE
// ------------------------------
const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        modeBtn.textContent = "Dark Mode";
    } else {
        modeBtn.textContent = "Light Mode";
    }
});
