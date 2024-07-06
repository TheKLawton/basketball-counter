let count = 0

let countG = 0
let scoreEl = document.getElementById("Homescore")
let guestScoreEl = document.getElementById("Guestscore")




function incrementOne(){
    count += 1
    scoreEl.textContent = count
}

function incrementTwo(){
    count += 2
    scoreEl.textContent = count
}

function incrementThree(){
    count += 3
    scoreEl.textContent = count
}

function incrementOneG(){
    countG += 1
    guestScoreEl.textContent = countG
}

function incrementTwoG(){
    countG += 2
    guestScoreEl.textContent = countG
}

function incrementThreeG(){
    countG += 3
    guestScoreEl.textContent = countG
}