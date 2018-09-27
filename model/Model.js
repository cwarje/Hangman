/* Handles storing and retrieving the game data. */
let Model = function() {
  let _guesses = 0;
  let _score = 0;
  let _outcome = "";
  let _correctWord;
  let _guessedWord;
  let _wordUpdateEventBus = new EventBus(this);
  let _definitionEventBus = new EventBus(this);
  let _guessesEventBus    = new EventBus(this);
  let _scoreEventBus      = new EventBus(this);
  let _outcomeEventBus    = new EventBus(this);
  let _dictionary = [
    {
      word: "tattoo",
      definition: "a form of body modification where a design is made by inserting ink"
    },
    {
      word: "electricity",
      definition: "is the set of physical phenomena associated with the presence and motion of electric charge"
    },
    {
      word: "fandangle",
      definition: "pretentious tomfoolery"
    },
    {
      word: "legicide",
      definition: "killer or destroyer of laws"
    },
    {
      word: "yomp",
      definition: "to carry heavy equipment over difficult terrain"
    },
    {
      word: "yaff",
      definition: "to bark like a snarling dog"
    },
    {
      word: "rackrent",
      definition: "excessive rent"
    },
    {
      word: "woolage",
      definition: "untidy hair"
    },
    {
      word: "underbridge",
      definition: "bridge carrying a road or railway"
    },
    {
      word: "nuque",
      definition: "nape of the neck"
    },
  ];

  // Gets the number of words in the dictionary.
  function getDictionaryLength() {
    let numWords = _dictionary.length;
    return numWords;
  }

  // Gets a random word from the dictionary.
  function getRandomWord() {
    let numWords = getDictionaryLength();
    var indexOfNewWord = Math.floor((Math.random() * numWords));
    getNewWord(indexOfNewWord);
  }

  // Gets a new word from the dictionary at a specified index.
  function getNewWord(index) {
    _correctWord = _dictionary[index].word;
    _definition = _dictionary[index].definition;

    // When a new word is requested, the game needs to  be reset.
    resetGameData();

    // Notify the View about the changes.
    _wordUpdateEventBus.notify();
    _definitionEventBus.notify();
  }

  // Calls functions to reset the game.
  function resetGameData() {
    resetGuessedWord();
    resetGuesses();
    setOutcome("");
    _outcomeEventBus.notify();
  }

  // Set the guessed word's characters to all underscores.
  function resetGuessedWord() {
    let correctWord = getWord();
    _guessedWord = correctWord.replace(/./g, '_');
  }

  // Sets the sets the word being guessed to the word specified.
  function setGuessedWord(updatedGuessedWord) {
    _guessedWord = updatedGuessedWord;
    _wordUpdateEventBus.notify();
  }

  // Increment the number of guesses and notify the View.
  function incrementGuesses() {
    _guesses++;
    _guessesEventBus.notify();
  }

  // Gets the correct word being guessed.
  function getWord() {
    return _correctWord;
  }

  // Gets the word being guessed.
  function getGuessedWord() {
    return _guessedWord;
  }

  // Gets the current definition.
  function getDefinition() {
    return _definition;
  }

  // Gets the number of guesses.
  function getGuesses() {
    return _guesses;
  }

  // Resets the number of guesses.
  function resetGuesses() {
    _guesses = 0;
  }

  // Gets the user's score.
  function getScore() {
    return _score;
  }

  // Decreases the user's score.
  function decreaseScore() {
    _score--;
    _scoreEventBus.notify();
  }

  // Increases the user's score.
  function increaseScore() {
    _score++;
    _scoreEventBus.notify();
  }

  // Set the outcome of the game.
  function setOutcome(outcome) {
    _outcome = outcome;
    _outcomeEventBus.notify();
  }

  // Return the outcome of the game.
  function getOutcome() {
    return _outcome;
  }



  // Making methods available.
  this.incrementGuesses = incrementGuesses;
  this.getNewWord = getNewWord;
  this.getWord = getWord;
  this.getDefinition = getDefinition;
  this.setGuessedWord = setGuessedWord;
  this.getGuessedWord = getGuessedWord;
  this.wordUpdateEventBus = _wordUpdateEventBus;
  this.definitionEventBus = _definitionEventBus;
  this.outcomeEventBus = _outcomeEventBus;
  this.guessesEventBus = _guessesEventBus;
  this.scoreEventBus = _scoreEventBus;
  this.getRandomWord = getRandomWord;
  this.getGuesses = getGuesses;
  this.getScore = getScore;
  this.getOutcome = getOutcome;
  this.increaseScore = increaseScore;
  this.decreaseScore = decreaseScore;
  this.getDictionaryLength = getDictionaryLength;
  this.setOutcome = setOutcome;
};