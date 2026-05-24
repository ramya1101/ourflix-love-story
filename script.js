const overlay = document.getElementById("start-overlay");

const videoContainer = document.getElementById("video-container");

const video = document.getElementById("intro-video");

const introScreen = document.getElementById("intro-screen");

/* START WEBSITE */

overlay.addEventListener("click", () => {

    overlay.style.display = "none";

    videoContainer.style.display = "block";

    video.muted = false;

    video.play();
});

/* VIDEO ENDS */

video.onended = () => {

    videoContainer.style.display = "none";

    introScreen.style.display = "flex";
};

/* ENTER BUTTON */

function enterTimeline(){

    window.location.href = "pages/timeline.html";
}