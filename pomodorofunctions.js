let time = 1500; //starts default timer at 25 minutes
let paused = false; //timer is not in a paused state by default

function convertTime(seconds) { //converts the time to mm:ss
    let minutes = Math.floor(seconds/60);
    let newSeconds = function(seconds) {
        let secondsIso = seconds % 60;
        if (secondsIso > 9) {
            return secondsIso.toString();
        } else { 
            return "0" + secondsIso.toString();
        }
    }
    return minutes.toString() + ":" + newSeconds(seconds);
}

function countDown(seconds) {
    setInterval(function() {
        if (paused == false) {
            time -= 1;
            document.getElementById("time").innerHTML = convertTime(time);
        }
    }, 1000);
}

let start = document.getElementById("start")
start.addEventListener("click", function() {
    paused = false;
    countDown(time);
})

let pause = document.getElementById("pause")
pause.addEventListener("click", function(){
    paused = true;
    clearInterval(countDown);
})

let stop = document.getElementById("stop")
stop.addEventListener("click", function() {
    time = 1500;
    paused = true;
    clearInterval(countDown);
    document.getElementById("time").innerHTML = convertTime(time);
})

let maincontrols = document.getElementsByClassName("maincontrols")
