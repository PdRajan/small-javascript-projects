const div = document.querySelector('#insert')

window.addEventListener('keydown',(e)=>{
    if(e.key.length < 8){
        div.style.fontSize = "400px"
    }else if(e.key.length < 4){
        div.style.fontSize = "500px"
    }
    div.innerHTML = e.key
    
})