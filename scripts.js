// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init()
{
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const paragraph = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocketImage = document.getElementById("rocket");
    rocketImage.style.position = 'absolulte';
    rocketImage.style.left = '0px';
    rocketImage.style.right = '0px';

    takeoffButton.addEventListener("click", event => {
        let confirmationWindow = confirm("Confirm that shuttle is ready for takeoff.");
        if (confirmationWindow)
        {
            paragraph.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "Blue";
            shuttleHeight.innerHTML = "10000";
        }
    });

    landingButton.addEventListener("click", event => {
        let confirmationWindow = confirm("The shuttle is landing. Landing gear engaged.");
        if (confirmationWindow)
        {
            paragraph.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }
    });

    missionAbortButton.addEventListener("click", event => {
        let confirmationWindow = confirm("Confirm that you want to abort the mission.");
        if (confirmationWindow)
        {
            paragraph.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }
    });    

    upButton.addEventListener("click", event => {
        if (shuttleHeight.innerHTML != "250000")
        {
            movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
            rocketImage.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }  
    });   

    downButton.addEventListener("click", event => {
        if (shuttleHeight.innerHTML != "0")
        {
            movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
            rocketImage.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }  
    });      
    
    rightButton.addEventListener("click", event => {
        if (shuttleHeight.innerHTML != "510000")
        {
            movement = parseInt(rocketImage.style.left) + 10 + 'px';
            rocketImage.style.left = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }  
    });
    
    leftButton.addEventListener("click", event => {
        if (shuttleHeight.innerHTML != "-20000")
        {
            movement = parseInt(rocketImage.style.left) - 10 + 'px';
            rocketImage.style.left = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }  
    });  
}

window.addEventListener("load", init);