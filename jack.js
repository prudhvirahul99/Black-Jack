

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]     //array
let cards = []
let sum = 0
// let sum = firstCard + secondCard 
// console.log(sum)

let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
// console.log(messageEL)
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("cards-el")

let player = {
    name:"Points",
    chips: 145
}

let PlayerEL = document.getElementById("player-el")
PlayerEL.textContent = player.name + ": $" + player.chips



function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13 ) + 1
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1){
        return 1
    }else{
        return randomNumber
    }
}




function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEL.textContent = "Cards:" 
    for (let i =0; i<cards.length; i++){
        cardEL.textContent += cards[i] + " "
    }


sumEL.textContent = "Sum :" + sum 
if (sum <= 20){    // if (false)
    message = "Do you want to draw a new card?"
    // isAlive = false
}
else if (sum === 21){    // if (true)
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
}
else{
    message = "You're out of the game"
    isAlive = false
}
console.log(message)

messageEL.textContent = message


}

function newcard(){
    // console.log("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum = sum + card    // sum+=card
        cards.push(card)
        // console.log(cards)
        renderGame()
    }
    
    
}






// console.log(hasBlackJack)
// console.log(isAlive)

