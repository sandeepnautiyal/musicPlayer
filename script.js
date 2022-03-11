// alert("hi");
console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));
// let forward = document.getElementById('forward');
// let backward = document.getElementById('backward');
//  let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    { songName: "Track 1", filePath: "songs/1.mp3", coverPath: "covers/jbb.jpg" },
    { songName: "Track 2", filePath: "songs/2.mp3", coverPath: "covers/jbb.jpg" },
    { songName: "Track 3", filePath: "songs/3.mp3", coverPath: "covers/jbb.jpg" },
    { songName: "Track 4", filePath: "songs/2.mp3", coverPath: "covers/jbb.jpg" },
    { songName: "Track 5", filePath: "songs/1.mp3", coverPath: "covers/jbb.jpg" },

];


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play-circle');
    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause');
    });
});



songsItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

// play pause music
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;

    } else {

        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
});

// change song by forward or reverse
document.getElementById('next').addEventListener('click', () => {

    if (songIndex >= 4) {
        songIndex = 0;
        console.log(songIndex);
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause');

});
document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 4;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause');

});


audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;

});
//progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})