
// let , const ,  var 

function render(){
    let container = document.getElementById('cars') 
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`    
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.onclick = function(){
    if (count > 1){
        count = count - 1
        render()
    }
    
}

next.onclick = function(){
    if (count < 649){
    count = count + 1
    render()
    }
}

const max = 649

let count = Math.floor(Math.random() * max) + 1


render()