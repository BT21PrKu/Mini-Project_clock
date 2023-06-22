
let  element = document.getElementById('time')


// setInterval(() => {
//     let date = new Date()
//     let hours = new Date().getHours()
//     let minutes = new Date().getMinutes()
//     let seconds = new Date().getSeconds()
//     //console.log(hours,minutes,seconds)

//     let time = `${hours}:${minutes}:${seconds}`
//     //console.log(time)

//     element.innerHTML = time

// }, 1000);

//more optimized version 
setInterval(() => {
    let date = new Date()

    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    //console.log(time)

    element.innerHTML = time

}, 1000);