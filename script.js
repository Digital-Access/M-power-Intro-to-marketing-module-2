const config = {
    videos: [
        "https://fast.wistia.net/embed/iframe/rhgkngj4yv?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/eaq1qblnw1?seo=false&videoFoam=true"
    ],
    next_button: "Next Video",
    previous_button: "Previous Video",
    progress_text: "Video "
}

const nxtBtn = document.getElementById('nxtBtn');
const prevBtn = document.getElementById('prevBtn');
const video = document.getElementById('video');
const progress = document.getElementById('progress');
const total = document.getElementById('total');
const progressText = document.getElementById('progressText');

progressText.innerText = config.progress_text;
total.textContent = config.videos.length;
nxtBtn.textContent = config.next_button;
prevBtn.textContent = config.previous_button;
video.src = config.videos[0];

let i = 0;
progress.textContent = i + 1;

let max = config.videos.length;
const nextVideo = () => {
    if (i < max - 1) {
        i++
        video.src = config.videos[i];
    }
    progress.textContent = i + 1;
}

nxtBtn.addEventListener('click', nextVideo)


const prevVideo = () => {
    if (i != 0) {
        i--
        video.src = config.videos[i];
    }
    progress.textContent = i + 1;
}


prevBtn.addEventListener('click', prevVideo)
