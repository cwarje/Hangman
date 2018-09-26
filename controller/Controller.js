let Controller = function(model, view) {
  let _model  = model;
  let _view   = view;

  function setupViewEventHandlers(self) {
    _view.resetButtonEventBus.onEvent(newWordLogic.bind(self));
    _view.alphabetButtonEventBus.onEvent(letterPressedLogic.bind(self));
  }

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

  function handleLetterPress(guessedLetter) {
    let correctWord = _model.getWord();
    let numGuesses;
    let newGuessedWord;
    
    if (!correctWord.includes(guessedLetter)) {
       _model.incrementGuesses();
      _model.decreaseScore();
    } else {
      updateGuessedWord(guessedLetter, correctWord);
      _model.incrementGuesses(); // Remove this line for the classic hangman rules.
      _model.increaseScore();
    }

    newGuessedWord = _model.getGuessedWord();
    numGuesses = _model.getGuesses();
    determineOutcome(newGuessedWord, correctWord, numGuesses);
  }

  function determineOutcome(newGuessedWord, correctWord, numGuesses) {
    if (numGuesses <= MAX_GUESSES && newGuessedWord === correctWord) {
      window.alert("Congratulations, you win!");
    } else if (numGuesses === 7) {
      window.alert("Game over.");
    }
  }


  // 
  function updateGuessedWord(guessedLetter, cw) {
    let guessedWord = _model.getGuessedWord();
    var newString = guessedWord;
    for (var i = 0; i < cw.length; i++) {
      if (cw.charAt(i) === guessedLetter && guessedWord.charAt(i) === '_') {
        newString = replaceAt(guessedWord, i, guessedLetter);
        guessedWord = newString;
      }
    }
    _model.setGuessedWord(newString);
  }

  function newWordLogic() {
    let numWords = 5;
    var indexOfNewWord = Math.floor((Math.random() * numWords));
    _model.getNewWord(indexOfNewWord);
  }

  function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

  // Setup
  setupViewEventHandlers(this);
}