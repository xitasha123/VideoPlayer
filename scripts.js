


const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');
const time = document.querySelector('#time');
const volume = document.querySelector('[name="volume"]');
const playbackRate = document.querySelector('[name="playbackRate"]');
const minusTime = document.querySelector('.minus');
const plusTime = document.querySelector('.plus');
const progress = document.querySelector('.progress')

// playbackRate - home

function toggleVideo() {
    
    if(video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►'
    }

}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime - minutes * 60);
    let x = minutes < 10 ? "0" + minutes : minutes;
    let y = seconds < 10 ? "0" + seconds : seconds;
    let fullMinute = Math.floor(video.duration / 60);
    let fullSecond = Math.floor(video.duration % 60);
    time.value = `${minutes} : ${y} / ${fullMinute} : ${fullSecond}`;
}

function handlePlaybackRate() {
    video.playbackRate = playbackRate.value;
    console.log('video.play', video.playbackRate)
}

function handleVolume() {
    video.volume = volume.value;
    console.log('video.volume', video.volume)
}

function plusTimeVideo() {
    const time = video.currentTime + 25;
    plusTime.value = time;
    video.currentTime = plusTime.value;
}

function minusTimeVideo() {
    const time = video.currentTime - 10;
    plusTime.value = time;
    video.currentTime = plusTime.value;
}

toggle.addEventListener('click', toggleVideo)
video.addEventListener('timeupdate', handleProgress)
volume.addEventListener('input', handleVolume)
playbackRate.addEventListener('input', handlePlaybackRate)
plusTime.addEventListener('click', plusTimeVideo);
minusTime.addEventListener('click', minusTimeVideo);
progress.addEventListener('click', function (event) {
    let clickTime = event.offsetX * 100 / parseFloat(progress.offsetWidth);
    video.currentTime = video.duration * clickTime / 100;
    progressBar.style.flexBasis = clickTime + '%';
 });