const king = '<div class = "piece" id = "king"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M400 448H48a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm16-288H256v-48h40a8 8 0 0 0 8-8V56a8 8 0 0 0 -8-8h-40V8a8 8 0 0 0 -8-8h-48a8 8 0 0 0 -8 8v40h-40a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8h40v48H32a32 32 0 0 0 -30.5 41.5L74.6 416h298.9l73.1-214.5A32 32 0 0 0 416 160z"/></svg></div>'
const queen = '<div class = "piece" id = "queen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 112a56 56 0 1 0 -56-56 56 56 0 0 0 56 56zm176 336H80a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm72.9-263.8l-28.5-15.9c-7.4-5-16.9-2.5-22.3 4.7a47.6 47.6 0 0 1 -47.2 18.2C383.7 186.9 368 164.9 368 141.4a13.4 13.4 0 0 0 -13.4-13.4h-38.8c-6 0-11.6 4-12.9 9.9a48 48 0 0 1 -93.9 0c-1.3-5.9-6.8-9.9-12.9-9.9H157.4a13.4 13.4 0 0 0 -13.4 13.4c0 25.7-19 48.8-44.7 50.5a47.5 47.5 0 0 1 -41.5-19.2c-5.3-7.1-14.7-9.5-22.1-4.5l-28.6 16a16 16 0 0 0 -5.4 20.5L104.2 416h303.5l102.6-211.4a16 16 0 0 0 -5.4-20.5z"/></svg></div>'
const rook = '<div class = "piece" id = "rook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M368 32h-56a16 16 0 0 0 -16 16v48h-48V48a16 16 0 0 0 -16-16h-80a16 16 0 0 0 -16 16v48H88.1V48a16 16 0 0 0 -16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.3-1.5 95-13.2 160h282.4C321.5 351 320 303.7 320 256l64-32V48a16 16 0 0 0 -16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'
const pawn = '<div class = "piece" id = "pawn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 224H80a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h16v5.5c0 44-4.1 86.6-24 122.5h176c-19.9-35.9-24-78.5-24-122.5V288h16a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16h-25.1c29.4-18.4 49.1-50.8 49.1-88a104 104 0 0 0 -208 0c0 37.2 19.7 69.6 49.1 88zM304 448H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'
const knight = '<div class = "piece" id = "knight"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M19 272.5l40.6 18.1a32 32 0 0 0 24.9 .5l12.8-5.1a32 32 0 0 0 18.8-20.5l9.2-30.7a24 24 0 0 1 12.6-15.7L159.9 208v50.3a48 48 0 0 1 -26.5 42.9l-57.2 28.7A80 80 0 0 0 32 401.5V416h319.9V224c0-106-85.9-192-191.9-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.8 7.6L16 80l-9 9a24 24 0 0 0 -7 17v137.2a32 32 0 0 0 19 29.3zM52 128a20 20 0 1 1 -20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'
const bishop = '<div class = "piece" id = "bishop"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M8 287.9c0 51.6 22.1 73.8 56 84.6V416h192v-43.5c33.9-10.8 56-33 56-84.6 0-30.6-10.7-67.1-26.7-102.6L185 285.7a8 8 0 0 1 -11.3 0l-11.3-11.3a8 8 0 0 1 0-11.3L270.3 155.1c-20.8-37.9-46.5-72.1-70.9-92.6C213.4 59.1 224 47.1 224 32a32 32 0 0 0 -32-32h-64a32 32 0 0 0 -32 32c0 15 10.6 27.1 24.6 30.5C67.8 106.8 8 214.5 8 287.9zM304 448H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'

const gameboard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const info = document.querySelector("#info-display")

const width = 8
let playerGo = "black"
playerDisplay.textContent = "black's"

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook, 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook 
]

const createBoard = () => {
    startPieces.forEach((startPiece, index) => {
        const square = document.createElement('div')
        square.setAttribute('square-id', index)
        square.innerHTML = startPiece //child for parts with pieces
        square.firstChild && square.firstChild.setAttribute('draggable', true)
        square.classList.add('square')
        const row = Math.floor((63 - index) / 8) + 1
        if (row % 2 === 0) {
            square.classList.add(index % 2 === 0 ? "beige" : "brown")
        }
        else {
            square.classList.add(index % 2 === 0 ? "brown" : "beige")
        }

        if( index <= 15) {
            square.firstChild.firstChild.classList.add('black')
        }
        gameboard.append(square)

        if (index >= 48) {
            square.firstChild.firstChild.classList.add('white')         
        }
    })
}
createBoard()

const allSquares = document.querySelectorAll('#gameboard .square')

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let startPositionId
let draggedElement

function dragStart(event) {
    startPositionId = event.target.parentNode.getAttribute('square-id')
    draggedElement = event.target    
}//get the position of which you are moving a piece from 

function dragOver(event) {
    event.preventDefault() //don't care where you are hovering the piece 
}

function dragDrop(event) {
    event.stopPropagation()

    const correctGo = draggedElement.firstChild.classList.contains(playerGo)
    const taken = event.target.classList.contains('piece')
    const opponetGo = playerGo === 'white' ? 'black' : "white"
    const takenByOpponent = event.target.firstChild?.classList.contains(opponetGo)
    const validMove = checkIfValid(event.target) 


    if(correctGo) {
        if(takenByOpponent && validMove) {
            event.target.parentNode.append(draggedElement)
            event.target.remove()
            checkWin()
            changePlayer()
            return
        }

        if(taken && !takenByOpponent) {//cannot move over your own piece
            return
        }

        if(validMove) {
            event.target.append(draggedElement)//case for no piece on new square
            checkWin()
            changePlayer()
            return
        }
    }
}

function checkIfValid(target) {
    const targetId = Number(target.getAttribute('square-id')) || Number(target.parentNode.getAttribute('square-id'))
    //get the sqaure id for a space either occupied or open 
    const startId = Number(startPositionId)
    const piece = draggedElement.id
    //carry type of piece, starting position, and where you want the piece to go

    switch(piece) {
        case 'pawn':
            const starterRow = [8, 9, 10, 11, 12, 13, 14, 15]
            if(
                starterRow.includes(startId) && startId + width * 2 === targetId || 
                startId + width === targetId ||
                startId + width - 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
                startId + width + 1 === targetId && document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild       
            ) {
                return true
            }
            break;
        case 'knight':
            if(
                startId + width * 2 + 1 === targetId ||
                startId + width * 2 - 1 === targetId ||
                startId + width - 2 === targetId ||
                startId + width + 2 === targetId ||
                startId - width * 2 + 1 === targetId ||
                startId - width * 2 - 1 === targetId ||
                startId - width - 2 === targetId ||
                startId - width + 2 === targetId
            ) {
                return true
            }
            break;
        case 'bishop':
            if(
                startId + width + 1 === targetId ||
                startId + width * 2 + 2 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) ||
                startId + width * 3 + 3 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) || 
                startId + width * 4 + 4 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild) || 
                startId + width * 5 + 5 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild)  && !document.querySelector(`[squareId="${startId + width * 4 + 4}"]`.firstChild) ||
                startId + width * 6 + 6 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild)  && !document.querySelector(`[squareId="${startId + width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 + 5}"]`.firstChild) ||
                startId + width * 7 + 7 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild)  && !document.querySelector(`[squareId="${startId + width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 + 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 6 + 6}"]`.firstChild) ||
                //
                startId - width - 1 === targetId ||
                startId - width * 2 - 2 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) ||
                startId - width * 3 - 3 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) || 
                startId - width * 4 - 4 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) || 
                startId - width * 5 - 5 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 - 4}"]`.firstChild) ||
                startId - width * 6 - 6 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 - 5}"]`.firstChild) ||
                startId - width * 7 - 7 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 - 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 6 - 6}"]`.firstChild) ||
                //
                startId - width + 1 === targetId ||
                startId - width * 2 + 2 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) ||
                startId - width * 3 + 3 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) || 
                startId - width * 4 + 4 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) || 
                startId - width * 5 + 5 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 + 4}"]`.firstChild) ||
                startId - width * 6 + 6 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 + 5}"]`.firstChild) ||
                startId - width * 7 + 7 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 + 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 6 + 6}"]`.firstChild) ||
                //
                startId + width - 1 === targetId ||
                startId + width * 2 - 2 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) ||
                startId + width * 3 - 3 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) || 
                startId + width * 4 - 4 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) || 
                startId + width * 5 - 5 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 - 4}"]`.firstChild) ||
                startId + width * 6 - 6 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 - 5}"]`.firstChild) ||
                startId + width * 7 - 7 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 - 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 6 - 6}"]`.firstChild)
            ) {
                return true
            }
            break;
        case 'rook':
            if(
                startId + width === targetId ||
                startId + width * 2 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) ||
                startId + width * 3 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) ||
                startId + width * 4 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) ||
                startId + width * 5 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4}"]`.firstChild) ||
                startId + width * 6 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5}"]`.firstChild) ||
                startId + width * 7 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 6}"]`.firstChild) ||
                //
                startId - width === targetId ||
                startId - width * 2 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) ||
                startId - width * 3 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) ||
                startId - width * 4 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) ||
                startId - width * 5 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4}"]`.firstChild) ||
                startId - width * 6 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5}"]`.firstChild) ||
                startId - width * 7 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 6}"]`.firstChild) ||
                //
                startId + 1 === targetId ||
                startId + 2 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) ||
                startId + 3 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) ||
                startId + 4 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) ||
                startId + 5 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 4}"]`.firstChild) ||
                startId + 6 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 5}"]`.firstChild) ||
                startId + 7 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 6}"]`.firstChild) ||
                //
                startId - 1 === targetId ||
                startId - 2 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) ||
                startId - 3 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) ||
                startId - 4 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) ||
                startId - 5 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 4}"]`.firstChild) ||
                startId - 6 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 5}"]`.firstChild) ||
                startId - 7 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 6}"]`.firstChild)
            ) {
                return true
            }
            break;
        case 'queen':
            if( 
                startId + width + 1 === targetId ||
                startId + width * 2 + 2 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) ||
                startId + width * 3 + 3 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) || 
                startId + width * 4 + 4 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild) || 
                startId + width * 5 + 5 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 + 4}"]`.firstChild) ||
                startId + width * 6 + 6 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 + 5}"]`.firstChild) ||
                startId + width * 7 + 7 === targetId && !document.querySelector(`[squareId="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 + 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 6 + 6}"]`.firstChild) ||
                //
                startId - width - 1 === targetId ||
                startId - width * 2 - 2 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) ||
                startId - width * 3 - 3 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) || 
                startId - width * 4 - 4 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) || 
                startId - width * 5 - 5 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 - 4}"]`.firstChild) ||
                startId - width * 6 - 6 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 - 5}"]`.firstChild) ||
                startId - width * 7 - 7 === targetId && !document.querySelector(`[squareId="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 - 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 6 - 6}"]`.firstChild) ||
                //
                startId - width + 1 === targetId ||
                startId - width * 2 + 2 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) ||
                startId - width * 3 + 3 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) || 
                startId - width * 4 + 4 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) || 
                startId - width * 5 + 5 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 + 4}"]`.firstChild) ||
                startId - width * 6 + 6 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 + 5}"]`.firstChild) ||
                startId - width * 7 + 7 === targetId && !document.querySelector(`[squareId="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2 + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3 + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4 + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5 + 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 6 + 6}"]`.firstChild) ||
                //
                startId + width - 1 === targetId ||
                startId + width * 2 - 2 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) ||
                startId + width * 3 - 3 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) || 
                startId + width * 4 - 4 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) || 
                startId + width * 5 - 5 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 - 4}"]`.firstChild) ||
                startId + width * 6 - 6 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 - 5}"]`.firstChild) ||
                startId + width * 7 - 7 === targetId && !document.querySelector(`[squareId="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2 - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3 - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4 - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5 - 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 6 - 6}"]`.firstChild) ||
                //
                startId + width === targetId ||
                startId + width * 2 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) ||
                startId + width * 3 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) ||
                startId + width * 4 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) ||
                startId + width * 5 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4}"]`.firstChild) ||
                startId + width * 6 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5}"]`.firstChild) ||
                startId + width * 7 === targetId && !document.querySelector(`[squareId="${startId + width}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + width * 6}"]`.firstChild) ||
                //
                startId - width === targetId ||
                startId - width * 2 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) ||
                startId - width * 3 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) ||
                startId - width * 4 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) ||
                startId - width * 5 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4}"]`.firstChild) ||
                startId - width * 6 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5}"]`.firstChild) ||
                startId - width * 7 === targetId && !document.querySelector(`[squareId="${startId - width}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - width * 6}"]`.firstChild) ||
                //
                startId + 1 === targetId ||
                startId + 2 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) ||
                startId + 3 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) ||
                startId + 4 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) ||
                startId + 5 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 4}"]`.firstChild) ||
                startId + 6 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 5}"]`.firstChild) ||
                startId + 7 === targetId && !document.querySelector(`[squareId="${startId + 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId + 6}"]`.firstChild) ||
                //
                startId - 1 === targetId ||
                startId - 2 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) ||
                startId - 3 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) ||
                startId - 4 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) ||
                startId - 5 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 4}"]`.firstChild) ||
                startId - 6 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 5}"]`.firstChild) ||
                startId - 7 === targetId && !document.querySelector(`[squareId="${startId - 1}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 2}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 3}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 4}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 5}"]`.firstChild) && !document.querySelector(`[squareId="${startId - 6}"]`.firstChild)
            ) {
                return true
            }
            break;
        case 'king':
            if(
                startId + 1 === targetId ||
                startId - 1 === targetId ||
                startId + width === targetId ||
                startId - width === targetId ||
                startId + width -1 === targetId ||
                startId + width + 1 === targetId ||
                startId - width - 1 === targetId ||
                startId - width + 1 === targetId
            ) {
                return true
            }
            break;

    }
}

function changePlayer() {
    if(playerGo === "black") {
        reverseIds()
        playerGo = "white"
        playerDisplay.textContent = "white's"
    }
    else {
        revertIds()
        playerGo = "black"
        playerDisplay.textContent = "black's"
    }
}

function reverseIds() {
    const allSquares = document.querySelectorAll('.square')
    allSquares.forEach((square, index) => {
        square.setAttribute('square-id', (width * width -1) - index)
    })
}

function revertIds() {
    const allSquares = document.querySelectorAll('.square')
    allSquares.forEach((square, index) => {
        square.setAttribute('square-id', index)
    })
}

function checkWin() {
    const kings = Array.from(document.querySelectorAll('#king'))
    if(!kings.some(king => king.firstChild.classList.contains("white"))) {
        info.innerHTML = "Black Wins"
        const allSquares = document.querySelectorAll('.square')
        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', false))
    }
    if(!kings.some(king => king.firstChild.classList.contains("black"))) {
        info.innerHTML = "White Wins"
        const allSquares = document.querySelectorAll('.square')
        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', false))
    }

}