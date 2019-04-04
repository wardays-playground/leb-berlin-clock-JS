
const updateClock = () => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    const currentTimeString = `${currentHours}:${currentMinutes}:${currentSeconds}`;

    document.getElementById('dateId').innerHTML = currentTimeString;

    drawClock(currentHours, currentMinutes, currentSeconds);
}

setInterval('updateClock()', 1000); 

let kill = setInterval('updateClock()', 1000);
window.clearInterval(kill);

drawClock = (hours, minutes, seconds) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let moveRigth;
    const colors = {
        red : "#F10E0E",
        yellow : "#F5ED08",
        grey : "#D5D4CD"
    }
    const size = {
        width: 50,
        height: 50
    }
    const params = {
        hours,
        minutes,
        seconds,
        colors,
        size,
        rigth: moveRigth,
        context: ctx
    };

    drawSeconds(params);
    drawFiveHours(params);
    drawOneHour(params);
    drawFiveMin(params);
    drawOneMin(params);
}

drawSeconds = (obj) => {
    if(obj.seconds % 2 === 0) {
        obj.context.fillStyle = obj.colors.grey;
    }
    else {
        obj.context.fillStyle = obj.colors.yellow;
    }
    obj.context.fillRect(325,25,obj.size.width, obj.size.height);
}

drawFiveHours = (obj) => {
    obj.right = 0;
    for(let i = 0; i < 4; i++) {
        if( i < Math.floor(obj.hours / 5)){
            obj.context.fillStyle = obj.colors.red;
        }
        else {
            obj.context.fillStyle = obj.colors.grey;
        }
        obj.context.fillRect(235 + obj.right,100,obj.size.width, obj.size.height);
        obj.right += 60;
    }
}

drawOneHour = (obj) => {
    obj.right = 0;
    for(let i = 0; i < 4; i++) {
        if( i < (obj.hours % 5)){
            obj.context.fillStyle = obj.colors.red;
        }
        else {
            obj.context.fillStyle = obj.colors.grey;
        }
        obj.context.fillRect(235 + obj.right,175,obj.size.width, obj.size.height);
        obj.right += 60;
    }
}

drawFiveMin = (obj) => {
    obj.right = 0;
    for(let i = 0; i < 11; i++) {
        if( i < Math.floor(obj.minutes / 5)){
            if( i === 2 || i === 5 || i === 8) {
                obj.context.fillStyle = obj.colors.red;
            }
            else {
                obj.context.fillStyle = obj.colors.yellow;
            }
        }
        else {
            obj.context.fillStyle = obj.colors.grey;
        }
        obj.context.fillRect(25 + obj.right,250,obj.size.width, obj.size.height);
        obj.right += 60;
    }
}

drawOneMin = (obj) => {
    obj.right = 0;
    for(let i = 0; i < 4; i++) {
        if( i < (obj.minutes % 5)){
            obj.context.fillStyle = obj.colors.yellow;
        }
        else {
            obj.context.fillStyle = obj.colors.grey;
        }
        obj.context.fillRect(235 + obj.right,325,obj.size.width, obj.size.height);
        obj.right += 60;
    }
}



