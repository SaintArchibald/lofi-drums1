// for keydown events
document.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    document.getElementById('keyW').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_clap.wav");
    audio.currentTime = 0;
    audio.play();
  } else if (e.key === "d") {
    document.getElementById('keyD').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_hihat.wav");
    audio.currentTime = 0;
    audio.play();
  } else if (e.key === "s") {
    document.getElementById('keyS').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_kick.wav");
    audio.currentTime = 0;
    audio.play();
  } else if (e.key === "a") {
    document.getElementById('keyA').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_openhat.wav");
    audio.currentTime = 0
    audio.play();
  } else if (e.key === " ") {
    document.getElementById('keySpace').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_boom (1).wav");
    audio.currentTime = 0
    audio.play();
  } else if (e.key === "m") {
    document.getElementById('keyM').classList.add('keyboard');
    let audio = new Audio("assets/take-your-seats-40322.mp3");
    audio.currentTime = 0
    audio.play();
  } else if (e.key === "ArrowUp") {
    document.getElementById('keyUp').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_ride.wav");
    audio.currentTime = 0
    audio.play();
  } else if (e.key === "ArrowLeft") {
    document.getElementById('keyLeft').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_tink.wav");
    audio.currentTime = 0
    audio.play();
  } else if (e.key === "ArrowDown") {
    document.getElementById('keyDown').classList.add('keyboard');
    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_tom.wav");
    audio.currentTime = 0
    audio.play();
  } else if (e.key === "ArrowRight") {
    document.getElementById('keyRight').classList.add('keyboard');

    let audio = new Audio("assets/01 - JavaScript Drum Kit_sounds_snare.wav");
    audio.currentTime = 0
    audio.play();
  }
});

document.addEventListener('keyup', (e) => {
    if (e.key === "w") {
      document.getElementById('keyW').classList.remove('keyboard');
    }
    else if (e.key === "d") {
      document.getElementById('keyD').classList.remove('keyboard');
    }
    else if (e.key === "s") {
      document.getElementById('keyS').classList.remove('keyboard');
    }
    else if (e.key === "a") {
      document.getElementById('keyA').classList.remove('keyboard');
    }
    else if (e.key === " ") {
      document.getElementById('keySpace').classList.remove('keyboard');
    }
    else if (e.key === "m") {
      document.getElementById('keyM').classList.remove('keyboard');
    }
    else if (e.key === "ArrowUp") {
      document.getElementById('keyUp').classList.remove('keyboard');
    }
    else if (e.key === "ArrowDown") {
      document.getElementById('keyDown').classList.remove('keyboard');
    }
    else if (e.key === "ArrowLeft") {
      document.getElementById('keyLeft').classList.remove('keyboard');
    }
    else if (e.key === "ArrowRight") {
      document.getElementById('keyRight').classList.remove('keyboard');
    }

    })

//onclick
const audioW = new Audio();
audioW.currentTime = 0
audioW.src = "./assets/01 - JavaScript Drum Kit_sounds_clap.wav";

const audioD = new Audio();
audioD.currentTime = 0
audioD.src = "assets/01 - JavaScript Drum Kit_sounds_hihat.wav";

const audioS = new Audio();
audioS.currentTime = 0
audioS.src = "assets/01 - JavaScript Drum Kit_sounds_kick.wav";

const audioA = new Audio();
audioA.currentTime = 0
audioA.src = "assets/01 - JavaScript Drum Kit_sounds_openhat.wav";

const audioSpace = new Audio();
audioSpace.currentTime = 0
audioSpace.src = "assets/01 - JavaScript Drum Kit_sounds_boom (1).wav";

const audioArrowup = new Audio();
audioArrowup.currentTime = 0
audioArrowup.src = "assets/01 - JavaScript Drum Kit_sounds_ride.wav";

const audioArrowleft = new Audio();
audioArrowleft.currentTime = 0
audioArrowleft.src = "assets/01 - JavaScript Drum Kit_sounds_tink.wav";

const audioArrowright = new Audio();
audioArrowright.currentTime = 0
audioArrowright.src = "assets/01 - JavaScript Drum Kit_sounds_snare.wav";

const audioArrowdown = new Audio();
audioArrowdown.currentTime = 0
audioArrowdown.src = "assets/01 - JavaScript Drum Kit_sounds_tom.wav";

const audioM = new Audio();
audioM.src = "assets/take-your-seats-40322.mp3";

// const audioS = new Audio();
// const audioS = new Audio();
// const audioS = new Audio();
