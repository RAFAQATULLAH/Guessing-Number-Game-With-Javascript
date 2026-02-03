let num=Math.floor(Math.random()*101)

let guess=+prompt("Guess The Number Between 0 To 100")
let chances=0
while(num!=guess){
    chances=++chances
    if(num<guess){
        guess=+prompt(`The Number is Less Then ${guess}`)
    }
    else if(num>guess) {
        guess=+prompt(`The Number is Greater Then ${guess}`)
    }
}
alert(`Congratulations You Got THe Number. Your Score = ${100-chances}` )
