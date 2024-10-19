let playPausebtn = document.getElementById('pausebtn');
let forwardbtn = document.getElementById('forward');
let backwardbtn = document.getElementById('backward');
let audio = document.getElementById('audio');
let songname = document.getElementById("songname");
let songartist = document.getElementById("songartist");

let songs = [
    {
        song: "7Years",
        name: "seven years",
        artist: "Lucas Graham",
    },
    {
        song: "New",
        name: "let her go",
        artist: "new new",

    },
];

let songindex = 0;


function playpause() {
    if (playPausebtn.classList.contains('bx-play')) {
        audio.play();
        playPausebtn.classList.remove('bx-play');
        playPausebtn.classList.add('bx-pause');
    }
    else {
        audio.pause();
        playPausebtn.classList.add('bx-play');
        playPausebtn.classList.remove('bx-pause');
    }

}
function forward() {
    let currentsong = songs[songindex];
    let nextsong = songs[songindex + 1];
    

        if (nextsong) {
            songindex++;
            audio.src = `New.mp3`;
            playPausebtn.classList.remove('bx-play');
            playPausebtn.classList.add('bx-pause');
            songname.innerHTML = nextsong.name;
            songartist.innerHTML = nextsong.artist;
            audio.play();
        }

    else {
        songindex = 0;
        currentsong =  songs[songindex];
        // songindex++;
        audio.src = `${currentsong.song}.mp3`;
        audio.play();
    }
}

function backward() {
    let currentsong = songs[songindex];
    let previoussong = songs[songindex - 1];

    if (previoussong) {
        songindex--;
        audio.src = `${previoussong.song}.mp3`;
        playPausebtn.classList.remove('bx-play');
        playPausebtn.classList.add('bx-pause');
        songname.innerHTML = previoussong.name;
        songartist.innerHTML = previoussong.artist;
        audio.play();
    } else {
        // Handle the case when there is no previous song
        // For example, loop back to the last song or display a message
        songindex = songs.length - 1;
        currentsong = songs[songindex];
        audio.src = `${currentsong.song}.mp3`;
        audio.play();
    }
}


