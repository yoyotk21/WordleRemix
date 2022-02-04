

let letters = document.getElementsByClassName('letter')

const ALPHABET = 'qwertyuiopasdfghjklzxcvbnm'.split('')

let word = 'hello'

let wordLetters = {}
for (letter of word) {
  if (Object.keys(wordLetters).includes(letter)) {
    wordLetters[letter]++
  } else {
    wordLetters[letter] = 1
  }
}


let characters = []
for ( _ = 0; _ < 25; _++) {
  characters.push('')
}

function update() {
  for (letter = 0; letter < 25; letter++) {
    letters[letter].innerText = characters[letter]
    if (Math.ceil((letter+1)/5) == Math.ceil(loc/5)) {
      letters[letter].style.animation = 'current 1s'
      letters[letter].style.borderRadius = '25px'
    } else {
      letters[letter].style.borderRadius = '0px'
    }
  }
}

let count = arr => [arr].filter(x => x==2).length

let loc = 1

function forward() {
  if (!(loc >= 5 && loc % 5 == 0)) {
    loc++
  }
}

function back() {
  if (!((loc >= 5 && loc % 5 == 1) || loc <= 1  )) {
    loc--
  }
}

document.onkeydown = (event) => {
  if (event.key == "Backspace") {
    characters[loc] = ''
    back() 
    
    
  } else if (ALPHABET.includes(event.key)){
    characters[loc-1] = event.key
    forward()
  }
  if (loc >= 5 && loc % 5 == 0 && event.key == 'Enter' && characters[loc-1] != '') {
    let row = []
    for (i = loc-5; i < loc; i++) {
      row.push(letters[i])
    }

    loc++

    guess = ''
    for (letter of row) {
      guess += row
    }
    let guessLetters = {}
    for (x of Object.keys(wordLetters)) {
      guessLetters[x] = wordLetters[x]
    }
    for (letter in row) {
      let text = row[letter].innerText

      // if (Object.keys(guessLetters).includes(text)) {
      //   guessLetters[text]++
      // } else {
      //   guessLetters[text] = 1
      // }

      if (text == word[letter]) {
        row[letter].style.backgroundColor = 'green'

        guessLetters[text]--
      }
    }
    console.log(guessLetters)
    for (letter in row) {
      let text = row[letter].innerText
      if (word.includes(text) && guessLetters[text] > 0 &&text != word[letter]) {
        row[letter].style.backgroundColor = 'blue'
        guessLetters[text]--
      }
    }
  }
  update()
}


update()
