// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoffButton = document.getElementId("takeoff");
    const landingButton = document.getElementId("landing");
    const abortButton = document.getElementId("missionAbort");
    const flightStatus=document.getElementId("flightStatus");
    
    window.addEventListener("click", function(){
        let liftoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (liftoffConfirm == true){
            flightStatus.innerHTMl += "Shuttle in flight."
        }
    })




});
