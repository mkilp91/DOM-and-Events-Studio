// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    let altitude = document.getElementById("spaceShuttleHeight");
    
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    let upVal = parseInt(Number(rocket.style.marginBottom));
    let altitudeNum = Number(altitude.innerHTML);
    let horVal = parseInt(Number(rocket.style.marginLeft));
    let horPerc = 41;
    let upPerc = 0;
    
    takeoffButton.addEventListener("click", function(){
        let liftoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (liftoffConfirm){
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            altitude.innerHTML = Number(10000);
            altitudeNum = altitudeNum += 10000;
            altitude.innerHTML = altitudeNum;
            upVal = upVal += 10;
            rocket.style.bottom = upVal + "px";
        }
    })
    
    landingButton.addEventListener("click", function() {
        let landingAlert = window.alert("Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        altitude.innerHTML = Number(0);
        rocket.style.marginLeft = null;
        rocket.style.marginBottom = null;
        rocket.style.left = horPerc + "%";
        rocket.style.bottom = upPerc + "%";
        upVal = 0;
        altitudeNum = 0;
    });
    
    abortButton.addEventListener("click", function () {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission:");
        if (abortConfirm) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            altitude.innerHTML = Number(0);
            upVal = 0;
            rocket.style.marginBottom = upVal + "px";
            rocket.style.marginLeft = null;
            rocket.style.marginBottom = null;
            rocket.style.left = horPerc + "%";
            rocket.style.bottom = upPerc + "%";
            upVal = 0;
            altitudeNum = 0;
        }
    })
    
    upButton.addEventListener("click", function () {
        
            upVal = upVal += 10;
            rocket.style.marginBottom = upVal + "px";
            altitudeNum = altitudeNum += 10000;
            altitude.innerHTML = altitudeNum;
            console.log("upVal = " + upVal);
    })
   
    downButton.addEventListener("click", function () {
        // console.log("margin bottom = " + rocket.style.marginBottom);
        // console.log("upVal = " + rocket.style.marginBottom);
        if (parseInt(rocket.style.marginBottom) >= 10 && upVal > 0) {
            upVal = upVal -= 10;
            rocket.style.marginBottom = upVal + "px";
            console.log("upVal in = " + upVal);
            console.log("rsb = " + parseInt(rocket.style.marginBottom));
            altitudeNum = altitudeNum -= 10000;
            altitude.innerHTML = altitudeNum;
        } else if (upVal === 0) {
            console.log("upVal acutally equals 0");
            rocket.style.bottom = 0 + 'px';
// ;            upVal = 0;
//             rocket.style.marginBottom = 0 + "px";
            // altitudeNum = 0;
            // altitude.innerHTML = altitudeNum;
        }
    });
    

    leftButton.addEventListener("click", function () {
        horVal = horVal -= 10;
        rocket.style.marginLeft = horVal + "px";
    })

    rightButton.addEventListener("click", function () {
        horVal = horVal += 10;
        rocket.style.marginLeft = horVal + "px";
    })

});
