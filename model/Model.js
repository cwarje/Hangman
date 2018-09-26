/* Handles storing and retrieving the game data. */
let Model = function() {
  let _guesses = 0;
  let _correctWord;
  let _guessedWord;
  let _wordUpdateEventBus = new EventBus(this);
  let _definitionEventBus = new EventBus(this);
  let _guessesEventBus = new EventBus(this);
  let _scoreEventBus = new EventBus(this);
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

  // Sorts the initial word to display
  // to make it 
  function getRandomWord() {
    let numWords = _dictionary.length;
    var indexOfNewWord = Math.floor((Math.random() * numWords));
    getNewWord(indexOfNewWord);
  }

  function getNewWord(index) {
    _correctWord = _dictionary[index].word;
    _definition = _dictionary[index].definition;
    resetGuessedWord();
    resetGuesses();
    resetScore();
    _wordUpdateEventBus.notify();
    _definitionEventBus.notify();
  }

  function resetGuessedWord() {
    let cWord = getWord();
    _guessedWord = cWord.replace(/./g, '_');
  }

  function setGuessedWord(updatedGuessedWord) {
    _guessedWord = updatedGuessedWord;
    _wordUpdateEventBus.notify();
  }

  function incrementGuesses() {
    _guesses++;
    _guessesEventBus.notify();
  }

  function getWord() {
    return _correctWord;
  }

  function getGuessedWord() {
    return _guessedWord;
  }

  function getDefinition() {
    return _definition;
  }

  function getGuesses() {
    return _guesses;
  }

  function resetGuesses() {
    _guesses = 0;
  }

  function getScore() {
    return _score;
  }

  function decreaseScore() {
    _score--;
    _scoreEventBus.notify();
  }

  function increaseScore() {
    _score++;
    _scoreEventBus.notify();
  }

  function resetScore() {
    _score = 0;
  }

  // Public API
  this.incrementGuesses = incrementGuesses;
  this.getNewWord = getNewWord;
  this.getWord = getWord;
  this.getDefinition = getDefinition;
  this.setGuessedWord = setGuessedWord;
  this.getGuessedWord = getGuessedWord;
  this.wordUpdateEventBus = _wordUpdateEventBus;
  this.definitionEventBus = _definitionEventBus;
  this.guessesEventBus = _guessesEventBus;
  this.scoreEventBus = _scoreEventBus;
  this.getRandomWord = getRandomWord;
  this.getGuesses = getGuesses;
  this.getScore = getScore;
  this.increaseScore = increaseScore;
  this.decreaseScore = decreaseScore;
};