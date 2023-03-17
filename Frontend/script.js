// REGISTER VARIABLES
const signinToggle = document.getElementById("sign-in-toggle");
const signupToggle = document.getElementById("sign-up-toggle");
const signinForm =document.getElementById("sign-in-form");
const signupForm = document.getElementById("sign-up-form");

// SCROLL BAR VARIABLES
const fullHeight = document.body.scrollHeight - window.innerHeight;

// VIEW OPINION VARIABLES
// First we'll select all the individual buttons for toggling the detailed divs
const toggleFeedBtn1 = document.querySelector(".view-opinion-1");
const toggleFeedBtn2 = document.querySelector(".view-opinion-2");
const toggleFeedBtn3 = document.querySelector(".view-opinion-3");
const toggleFeedBtn4 = document.querySelector(".view-opinion-4");
const toggleFeedBtn5 = document.querySelector(".view-opinion-5");
const toggleFeedBtn6 = document.querySelector(".view-opinion-6");
const toggleFeedBtn7 = document.querySelector(".view-opinion-7");
const toggleFeedBtn8 = document.querySelector(".view-opinion-8");
const toggleFeedBtn9 = document.querySelector(".view-opinion-9");
const toggleFeedBtn10 = document.querySelector(".view-opinion-10");

// Second we're going to select all the indivual detailed divs here
const feedExtend1 = document.querySelector(".extend-1");
const feedExtend2 = document.querySelector(".extend-2");
const feedExtend3 = document.querySelector(".extend-3");
const feedExtend4 = document.querySelector(".extend-4");
const feedExtend5 = document.querySelector(".extend-5");
const feedExtend6 = document.querySelector(".extend-6");
const feedExtend7 = document.querySelector(".extend-7");
const feedExtend8 = document.querySelector(".extend-8");
const feedExtend9 = document.querySelector(".extend-9");
const feedExtend10 = document.querySelector(".extend-10");

const feedTextExtend = document.querySelectorAll(".feed-text-extended");

toggleFeedBtn1.addEventListener("click", () => {
    feedExtend1.classList.toggle("feed-toggle");
    toggl
});

toggleFeedBtn2.addEventListener("click", () => {
    feedExtend2.classList.toggle("feed-toggle");
});

toggleFeedBtn3.addEventListener("click", () => {
    feedExtend3.classList.toggle("feed-toggle");
});

toggleFeedBtn4.addEventListener("click", () => {
    feedExtend4.classList.toggle("feed-toggle");
});

toggleFeedBtn5.addEventListener("click", () => {
    feedExtend5.classList.toggle("feed-toggle");
});

toggleFeedBtn6.addEventListener("click", () => {
    feedExtend6.classList.toggle("feed-toggle");
});

toggleFeedBtn7.addEventListener("click", () => {
    feedExtend7.classList.toggle("feed-toggle");
});

toggleFeedBtn8.addEventListener("click", () => {
    feedExtend8.classList.toggle("feed-toggle");
});

toggleFeedBtn9.addEventListener("click", () => {
    feedExtend9.classList.toggle("feed-toggle");
});

toggleFeedBtn10.addEventListener("click", () => {
    feedExtend10.classList.toggle("feed-toggle");
});


// REGISTER PAGE SCRIPT

function toggleSignUp(){
    signinToggle.style.backgroundColor = "#08b74f";
    signinToggle.style.color = "#FFFF";
    signupToggle.style.backgroundColor = "#00002F";
    signupToggle.style.color = "#FFFF";
    signinForm.style.display = "none";
    signupForm.style.display = "block";
}

function toggleSignIn(){
    signinToggle.style.backgroundColor = "#00002F";
    signinToggle.style.color = "#FFFF";
    signupToggle.style.backgroundColor = "#08B74F";
    signupToggle.style.color = "#FFFF";
    signinForm.style.display = "block";
    signupForm.style.display = "none";
}

// SCROLL BAR SCRIPT
window.addEventListener("scroll", () => {
    scroll = pageYOffset

    progress=(scroll/fullHeight)*100
    document.getElementById("bar").style.width = `${progress}vw`
})

// VIEW OPINION STAT SCRIPT
function hideShow() {
    
}