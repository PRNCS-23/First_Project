// GENERATE A RANDOM COLOR
const randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0 ; i < 6 ; i++) {
        color += hex[Math.floor(Math.random() * 16 )]
    }
    return color
}

let interval

let startChangingColor = function(){
    interval = setInterval(colorChange, 1000)

    function colorChange(){
        document.body.style.backgroundColor = randomColor();
    }
}

let stopChangingColor = function(){
    clearInterval(interval)
}

document.querySelector('.Start').addEventListener('click', startChangingColor)
document.querySelector('.Stop').addEventListener('click', stopChangingColor)