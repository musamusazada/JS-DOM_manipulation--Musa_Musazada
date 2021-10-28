function PlaySound(soundobj) {
    let thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    let thissound = document.getElementById(soundobj);
    thissound.pause();
}