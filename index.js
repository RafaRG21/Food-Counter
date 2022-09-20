let countEl = document.getElementById("count-el")
let entryEl = document.getElementById("save-el")
let count = 0
let clicked = false

function increment(){
    count++
    countEl.textContent = count
}

function save(){
    if(clicked)
        entryEl.textContent += " - " + count
    else{
        entryEl.textContent += count
        clicked = true
    }
    count = 0
    countEl.textContent = count
}