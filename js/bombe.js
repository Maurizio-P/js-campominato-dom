/* 
1 - generare 16 numeri casuali, compresi tra 1 ed il numero massimo di caselle (saranno le nostre bombe)
    1.2 - controllare che i numeri generati non siano uguali tra di loro
2 - Al click sulla casella:
    2.1 - SE il numero non è uguale a quello della bomba coloriamo di blu
    2.2 - ALTRIMENTI coloriamo di rosso la casella e facciamo comparire un alert per indicare la fine della partita
*/

const bombContainer = []
generateBombNumb(1, 100)

console.log(bombContainer)
console.log(generateBombNumb)

function generateBombNumb(numMin, numMax){
    const bombNumb = 0
    
    for (let i = 0; i < numMax.lenght; ){
        // genero il numero
        bombNumb = Math.ceil(Math.random() * numMax)

        if (bombNumb === bombContainer.includes(bombNumb)){

        }else {
            bombContainer.push(bombNumb[i])
        }
    }
    return bombNumb
}
console.log(bombContainer)