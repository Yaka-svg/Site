function playDownloadSound() {
    let sound = document.getElementById("downloadSound");
    
    // This resets the sound so if they click twice, it plays both times
    sound.currentTime = 0; 
    sound.play();
}