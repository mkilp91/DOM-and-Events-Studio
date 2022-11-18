// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const altitude = document.getElementById("spaceShuttleHeight");

    takeoffButton.addEventListener("click", function(){
        let liftoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (liftoffConfirm){
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            altitude.innerHTML = Number(10000);
            // console.log(altitude.innerHTML+1);
        }
        
    })
    
    landingButton.addEventListener("click", function() {
        let landingAlert = window.alert("Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        altitude.innerHTML = Number(0);
    });
    
    abortButton.addEventListener("click", function () {
        // console.log("you clicked");
        let abortConfirm = window.confirm("Confirm that you want to abort the mission:");
        if (abortConfirm) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            altitude.innerHTML = Number(0);
        }
    })


});
