let i = 0;
let time = 100;

function setTime() {
    if (document.getElementById("10").checked) {
        return 100
    }

    if (document.getElementById("30").checked) {
        return 300
    }

    if (document.getElementById("60").checked) {
        return 600
    }
}

function setColor(width) {
    if (width > 50) {
        return 'green';
    } else if (width > 25) {
        return 'yellow';
    }
    return 'red';
}

function move() {

    time = setTime();

    if (i === 0) {
        i = 1;
        let elem = document.getElementById("bar");
        let width = 100;
        let id = setInterval(frame, time);

        function frame() {
            if (width <= 0) {
                clearInterval(id);
                i = 0;
            } else {
                width--;
                elem.style.width = width + "%";
                elem.style.backgroundColor = setColor(width);
            }
        }
    }
}

export {
    move
}