/* Handles logic based on events. */
let Controller = function(model, view) {
  let _model  = model;
  let _view   = view;

  // Set up View event handlers.
  function setupViewEventHandlers(self) {
    _view.resetButtonEventBus.onEvent(newWordLogic.bind(self));
    _view.alphabetButtonEventBus.onEvent(letterPressedLogic.bind(self));
  }

  // Determines which button was pressed and runs that logic.
  function letterPressedLogic() {
    let letter = buttonP.target.value;
    switch (letter) {
      case 'a':
        handleLetterPress('a');
        break;
      case 'b':
        handleLetterPress('b');
        break;
      case 'c':
        handleLetterPress('c');
        break;
      case 'd':
        handleLetterPress('d');
        break;
      case 'e':
        handleLetterPress('e');
        break;
      case 'f':
        handleLetterPress('f');
        break;
      case 'g':
        handleLetterPress('g');
        break;
      case 'h':
        handleLetterPress('h');
        break;
      case 'i':
        handleLetterPress('i');
        break;
      case 'j':
        handleLetterPress('j');
        break;
      case 'k':
        handleLetterPress('k');
        break;
      case 'l':
        handleLetterPress('l');
        break;
      case 'm':
        handleLetterPress('m');
        break;
      case 'n':
        handleLetterPress('n');
        break;
      case 'o':
        handleLetterPress('o');
        break;
      case 'p':
        handleLetterPress('p');
        break;
      case 'q':
        handleLetterPress('q');
        break;
      case 'r':
        handleLetterPress('r');
        break;
      case 's':
        handleLetterPress('s');
        break;
      case 't':
        handleLetterPress('t');
        break;
      case 'u':
        handleLetterPress('u');
        break;
      case 'v':
        handleLetterPress('v');
        break;
      case 'w':
        handleLetterPress('w');
        break;
      case 'x':
        handleLetterPress('x');
        break;
      case 'y':
        handleLetterPress('y');
        break;
      case 'z':
        handleLetterPress('z');
        break;
      default:
        console.log("Invalid character entered. Ignoring...")
    }
  }

  // Determines if the word includes the users guessed letter
  // and updates the score and the UI accordingly.
  function handleLetterPress(guessedLetter) {
    let correctWord = _model.getWord();
    let numGuesses;
    let newGuessedWord;
    
    if (!correctWord.includes(guessedLetter)) {
       _model.incrementGuesses();
      _model.decreaseScore();
    } else {
      let numCorrectCharacter = updateGuessedWord(guessedLetter, correctWord);
      let i;
      for (i = 0; i < numCorrectCharacter; i++) {
        _model.increaseScore();
      }
    }

    newGuessedWord = _model.getGuessedWord();
    numGuesses = _model.getGuesses();
    determineOutcome(newGuessedWord, correctWord, numGuesses);
  }

  // Determines the result of the finished game.
  // Alerts the user.
  function determineOutcome(newGuessedWord, correctWord, numGuesses) {
    if (newGuessedWord === correctWord) {
      // window.alert("Congratulations, you win!");
      _model.setOutcome("YOU WIN");
    } else if (numGuesses === MAX_GUESSES) {
      // window.alert("Game over.");
      _model.setOutcome("YOU LOSE");
    } else {
      _model.setOutcome("");
    }

  }

  // Determines if a guess is correct and
  // updates the guessed word with the correct letter.
  // Returns the number of occurences of the letter.
  function updateGuessedWord(guessedLetter, cw) {
    let guessedWord = _model.getGuessedWord();
    var newString = guessedWord;
    let n = 0;
    for (var i = 0; i < cw.length; i++) {
      if (cw.charAt(i) === guessedLetter && guessedWord.charAt(i) === '_') {
        newString = replaceAt(guessedWord, i, guessedLetter);
        guessedWord = newString;
        n++;
      }
    }
    _model.setGuessedWord(newString);
    return n;
  }

  // Gets a new word from the Model.
  function newWordLogic() {
    let numWords = _model.getDictionaryLength();
    var indexOfNewWord = Math.floor((Math.random() * numWords));
    _model.getNewWord(indexOfNewWord);
  }

  // Replaces the character in a string at the index specified.
  function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

  setupViewEventHandlers(this);
}

/* jQuery for button disabling and enabling. */
$(document).ready(function () {
  // Disable the button when clicked.
  $('.disable').click(function () {
    $(this).prop('disabled', true);
  });

  // Enabled all the buttons on a game restart.
  $('.reset-view-button').click(function () {
    $('.disable').prop('disabled', false);
  });
})