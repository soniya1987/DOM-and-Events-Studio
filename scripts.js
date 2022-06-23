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
    let position = 0;

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

    up.addEventListener("click", event => {
        console.log(rocketImage.offsetTop);
        console.log(rocketImage.offsetHeight);
        console.log(rocketImage.offsetLeft);
        console.log(rocketImage.offsetParent.offsetTop, rocketImage.offsetParent.offsetHeight);
        position = rocketImage.offsetParent.offsetTop - 10;
        rocketImage.style.top = position + 'px';
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    });   

    down.addEventListener("click", event => {
        if (position >= 360)
        {
            position = 360;
        }
        else
        {
            position += 10;
        }
        console.log(rocketImage.offsetTop);
        rocketImage.scroll += 10;
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    });      
    
    right.addEventListener("click", event => {
        rocketImage.style.bottom -= '10px';
    });
    
    left.addEventListener("click", event => {
        rocketImage.style.bottom -= '10px';
    });  
}

window.addEventListener("load", init);