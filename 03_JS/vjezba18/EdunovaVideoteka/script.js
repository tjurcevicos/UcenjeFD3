/* =========================================
   EDUNOVA VIDEOTEKA
   script.js
========================================= */


/* =========================================
   SVI VIDEO PLAYERI
========================================= */

const videos = document.querySelectorAll("video");


/* =========================================
   SAMO JEDAN VIDEO MOŽE SVIRATI
========================================= */

videos.forEach((video) => {

    video.addEventListener("play", () => {

        videos.forEach((otherVideo) => {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});


/* =========================================
   ESC = PAUZA VIDEA
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        videos.forEach((video) => {
            video.pause();
        });

    }

});


/* =========================================
   VIDEO ZAVRŠEN
========================================= */

videos.forEach((video) => {

    video.addEventListener("ended", () => {

        video.currentTime = 0;

    });

});


/* =========================================
   LOG
========================================= */

console.log(
    `Edunova Videoteka učitana. Ukupno videa: ${videos.length}`
);