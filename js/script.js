/*
1 - recuperiamo come const il select, il bottone e il nostro quadrato che conterrà la griglia
2 - Al nostro click sul bottone recuperiamo il nostro valore del select
3 - stampiamo la griglia in base al livello scelto dal nostro utente
4 - Al click su ogni cella, la coloriamo
*/


//  1

const difficolta = document.getElementById("difficolta")
const start = document.getElementById("start")
const containerGrid = document.querySelector(".container-grid")
let bombe;
let totalCell
console.log(difficolta, start, containerGrid)
// 2

start.addEventListener("click", function(){
    const valueDif = difficolta.value 
    // 2.1 recupero la const che mi indica quante celle devo creare
    totalCell = numCell(valueDif)
    console.log(totalCell)
    
    // 3 stampare la griglia in base al livello scelto
    bombe = generatebombNumb(16, totalCell)
    gridCreate(totalCell)
    
})


function numCell(valueDif){
    let numCellDif
    switch (valueDif){
        case "easy":
            numCellDif = 100
            break;
        case "regular":
            numCellDif = 81
            break;
        case "hard": 
            numCellDif = 49
            break;
    }

    return numCellDif
}

function gridCreate(num){
    containerGrid.innerHTML = ""

    const cellForRow = Math.sqrt(num);
    const dimCell = 100 / cellForRow;

    console.log(num)
    for (let i = 0; i < num; i++){
        const cell = document.createElement("div")
        cell.classList.add("square")
        cell.style.width = dimCell + "%"
        cell.style.height = dimCell + "%"
        cell.innerHTML = [i + 1]
        cell.addEventListener("click", cellClick)
        containerGrid.append(cell)
    }

}

// function cellClick(){
//     console.log(event.target.innerText)
//     const numeroCella = parseInt(event.target.innerText)
//     if (bombe.includes(numeroCella)){
//         this.classList.add("bomb")
//         alert("Hai calpestato una bomba, prova a vincere nella prossima vita")
//         location.reload()
//     }
//     this.classList.toggle("active")
// }

function cellClick(){
    const numeroCella = parseInt(this.textContent)
    console.log(this)
    if (bombe.includes(numeroCella)){
        // this.classList.add("bomb")
        showBomb()
        alert("Hai calpestato una bomba, prova a vincere nella prossima vita")
        containerGrid.innerHTML += `<div class="stop-game"></div>`
    }
    this.classList.toggle("active")
}

function generatebombNumb(numBomb, numbMaxCell){
    // il mio array avrà qui i numeri delle mie bombe 
    const bombContainer = []
    // fino a quando la lunghezza del mio bombContainer è inferiore al numero di bombe richiesto, eseguirà il ciclo 
    while ( bombContainer.length < numBomb){
        // genero la bomba 
        const bomb = Math.ceil(Math.random() * numbMaxCell)
        // se la bomba non è inclusa nel container, la aggiungo 
        if (!bombContainer.includes(bomb)){
            bombContainer.push(bomb)
        }
    }
    return bombContainer;
}

function showBomb(){
    // recupero le celle esistenti
    const listCell = containerGrid.querySelectorAll(".square")

    for(let i = 0; i < bombe.length; i++){
        const singolaBomba = bombe[i]
        const indicePerConfronto = singolaBomba - 1 

        if (indicePerConfronto >= listCell.length) {
            continue
        }

        const cellBomb = listCell[indicePerConfronto]

        cellBomb.classList.add("bomb")
    }
}