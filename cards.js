let textArea = document.querySelector("#words")
let button = document.querySelector("#create")
let newElement = document.querySelector("#newCard")
let cardId = 0;
let delCard = 0;

button.addEventListener("click", createCard)


function createCard() {
    const textAreaEl = textArea.value
    cardId++;
    let cardInfo = `
        <article class="card" id="card--${cardId}">
    <div>${textAreaEl}</div>
    <div>
        <button id="delete--${cardId}">Delete This Card</button>
    </div>
    </article>`
    
    newElement.innerHTML += cardInfo

    const deleteBtn = document.querySelector(`#delete--${cardId}`)

    addDeleteEvent(deleteBtn)
}

function deleteButton() {
    let elId = event.target.id.split("--");
    console.log(elId)
    const delId = "card--" + elId[1]
    const delCard = document.getElementById(delId)
    console.log(delCard)
    delCard.parentNode.removeChild(delCard);
}

function addDeleteEvent(element) {
    element.addEventListener("click", deleteButton)
}



// button.addEventListener('click', () => {
//     let userInput = textArea.value
//     cardId ++;
//     newElement.innerHTML += `
//     <article class="card" id="card--${cardId}">
//     <div>${userInput}</div>
//     <div>
//         <button id="delete--${cardId}">Delete This Card</button>
//     </div>
//     </article>
//     `

//     textArea.value = "";
// })

// const createCard = (text) => {
//     `
//     <article class="card" id="card--1">
//     <div>${text}</div>
//     <div>
//         <button id="delete--1">Delete This Card</button>
//     </div>
// </article>
//     `
// }