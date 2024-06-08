const Clock = document.querySelector('#Clock')

setInterval( (e)=>{
    let date = new Date()
    Clock.innerHTML = date.toLocaleTimeString();
}, 1000)