const clock = document.getElementById('clock')

setInterval(()=>{
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    clock.style.border = "5px solid red"
},1000)