// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus=document.getElementById("flightStatus");
    
    takeoffButton.addEventListener("click", function(){
        let liftoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (liftoffConfirm == true){
            flightStatus.innerHTMl += "Shuttle in flight."
        }
    })




});
