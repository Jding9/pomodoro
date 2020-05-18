let time = 1500; //starts default timer at 25 minutes
let workDuration = 1500;
let restDuration = 300;
let paused = true; //timer is not in a paused state by default
let counting;
let workStatus = true; // workStatus to reference if timer refers to working time or rest time

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
    counting = setInterval(function() {
        if (workStatus == true && time == 0 ) {
            alert("Time for a break!")
            paused = true;
            time = restDuration;
            workStatus = false;
            document.getElementById("time").innerHTML = convertTime(time);
        }
        if (workStatus == false && time == 0) {
            alert("Alright back to work!")
            paused = true;
            time = workDuration;
            workStatus = true;
            document.getElementById("time").innerHTML = convertTime(time);
        }
        if (paused == false) {
            time -= 1;
            document.getElementById("time").innerHTML = convertTime(time);
        }
        if (workStatus == false) {
            document.getElementById("time").style.color = "green";
        } else {
            document.getElementById("time").style.color = "black";
        }
    }, 1000);
}

let start = document.getElementById("start")
start.addEventListener("click", function() {
    paused = false;
    clearInterval(counting);
    countDown(time);
})

let pause = document.getElementById("pause")
pause.addEventListener("click", function(){
    paused = true;
    clearInterval(counting);
})

let stop = document.getElementById("stop")
stop.addEventListener("click", function() {
    time = workDuration;
    paused = true;
    clearInterval(counting);
    workStatus = true;
    document.getElementById("time").style.color = "black";
    document.getElementById("time").innerHTML = convertTime(time);
})

let maincontrols = document.getElementsByClassName("maincontrols")

let work_uparrow = document.getElementById("work_uparrow");
work_uparrow.addEventListener("click", function() {
    workDuration += 60;
    document.getElementById("workDurationOutput").innerHTML = workDuration / 60;
    if (paused == true && workStatus == true) {
        time = workDuration;
        document.getElementById("time").innerHTML = convertTime (time);
    }
});

let work_downarrow = document.getElementById("work_downarrow");
work_downarrow.addEventListener("click", function() {
    if (workDuration > 0) {
        workDuration -= 60;
        document.getElementById("workDurationOutput").innerHTML = workDuration / 60;
    }
    if (paused == true && workStatus == true) {
        time = workDuration;
        document.getElementById("time").innerHTML = convertTime (time);
    }
});

let rest_uparrow = document.getElementById("rest_uparrow");
rest_uparrow.addEventListener("click", function() {
    if (restDuration > 0){
        restDuration += 60;
        document.getElementById("restDurationOutput").innerHTML = restDuration / 60;
    }
    if (paused == true && workStatus == false) {
        time = restDuration;
        document.getElementById("time").innerHTML = convertTime (time);
    }
});

let rest_downarrow = document.getElementById("rest_downarrow");
rest_downarrow.addEventListener("click", function() {
    if (restDuration > 0) {
        restDuration -= 60;
        document.getElementById("restDurationOutput").innerHTML = restDuration / 60;
    }
    if (paused == true && workStatus == false) {
        time = restDuration;
        document.getElementById("time").innerHTML = convertTime (time);
    }
});
