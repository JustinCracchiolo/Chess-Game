const king = '<div class = "piece" id = "king"><i class="fas fa-chess-king"></i></div>'
const queen = '<div class = "piece" id = "queen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 112a56 56 0 1 0 -56-56 56 56 0 0 0 56 56zm176 336H80a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm72.9-263.8l-28.5-15.9c-7.4-5-16.9-2.5-22.3 4.7a47.6 47.6 0 0 1 -47.2 18.2C383.7 186.9 368 164.9 368 141.4a13.4 13.4 0 0 0 -13.4-13.4h-38.8c-6 0-11.6 4-12.9 9.9a48 48 0 0 1 -93.9 0c-1.3-5.9-6.8-9.9-12.9-9.9H157.4a13.4 13.4 0 0 0 -13.4 13.4c0 25.7-19 48.8-44.7 50.5a47.5 47.5 0 0 1 -41.5-19.2c-5.3-7.1-14.7-9.5-22.1-4.5l-28.6 16a16 16 0 0 0 -5.4 20.5L104.2 416h303.5l102.6-211.4a16 16 0 0 0 -5.4-20.5z"/></svg></div>'
const rook = '<div class = "piece" id = "rook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M368 32h-56a16 16 0 0 0 -16 16v48h-48V48a16 16 0 0 0 -16-16h-80a16 16 0 0 0 -16 16v48H88.1V48a16 16 0 0 0 -16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.3-1.5 95-13.2 160h282.4C321.5 351 320 303.7 320 256l64-32V48a16 16 0 0 0 -16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'
const pawn = '<div class = "piece" id = "pawn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 224H80a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h16v5.5c0 44-4.1 86.6-24 122.5h176c-19.9-35.9-24-78.5-24-122.5V288h16a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16h-25.1c29.4-18.4 49.1-50.8 49.1-88a104 104 0 0 0 -208 0c0 37.2 19.7 69.6 49.1 88zM304 448H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'
const knight = '<div class = "piece" id = "knight"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M19 272.5l40.6 18.1a32 32 0 0 0 24.9 .5l12.8-5.1a32 32 0 0 0 18.8-20.5l9.2-30.7a24 24 0 0 1 12.6-15.7L159.9 208v50.3a48 48 0 0 1 -26.5 42.9l-57.2 28.7A80 80 0 0 0 32 401.5V416h319.9V224c0-106-85.9-192-191.9-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.8 7.6L16 80l-9 9a24 24 0 0 0 -7 17v137.2a32 32 0 0 0 19 29.3zM52 128a20 20 0 1 1 -20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'
const bishop = '<div class = "piece" id = "bishop"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M8 287.9c0 51.6 22.1 73.8 56 84.6V416h192v-43.5c33.9-10.8 56-33 56-84.6 0-30.6-10.7-67.1-26.7-102.6L185 285.7a8 8 0 0 1 -11.3 0l-11.3-11.3a8 8 0 0 1 0-11.3L270.3 155.1c-20.8-37.9-46.5-72.1-70.9-92.6C213.4 59.1 224 47.1 224 32a32 32 0 0 0 -32-32h-64a32 32 0 0 0 -32 32c0 15 10.6 27.1 24.6 30.5C67.8 106.8 8 214.5 8 287.9zM304 448H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg></div>'
