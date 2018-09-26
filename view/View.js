let View  = function(model) {

  const _template = `
<div class="card">
  <div class="card-header text-center">
    HANGMAN
  </div>
  <div class="card-body">
    <div class="counter-view-container">
      <h1 class="word-view-display"></h1>
      <h4 class="definition-view-display"></h4>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="a">a</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="b">b</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="c">c</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="d">d</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="e">e</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="f">f</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="g">g</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="h">h</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="i">i</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="j">j</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="k">k</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="l">l</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="m">m</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="n">n</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="o">o</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="p">p</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="q">q</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="r">r</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="s">s</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="t">t</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="u">u</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="v">v</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="w">w</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="x">x</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="y">y</button>
      <button type="button" class="btn btn-success alphabet-view-button disable" value="z">z</button>
      <br>
      <br>
      <button type="button" class="btn btn-warning reset-view-button">New Game</button>
    </div>
  </div>
  <div class="card-footer text-muted">
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="guesses-view-display"></h3>
    </div>
    <div class="col">
      <h3 class="score-view-display"></h3>
    </div>
    </div>
  </div>
  </div>
</div>
  `;

  let _$;
  let _$resetButton;
  let _$wordDisplay;
  let _$definition;
  let _$guesses;
  let _model               = model;
  let _resetButtonEventBus = new EventBus(this);
  let _alphabetButtonEventBus = new EventBus(this);

  function buildDomTree() {
    _$              = $(_template.trim());
    _$alphabetButton     = _$.find(".alphabet-view-button");
    _$resetButton   = _$.find(".reset-view-button");
    _$wordDisplay   = _$.find(".word-view-display");
    _$definition    = _$.find(".definition-view-display");
    _$guesses       = _$.find(".guesses-view-display");
    _$score         = _$.find('.score-view-display');
  }

  function setupGuiEventHandlers(self) {
    _$resetButton.click(_resetButtonEventBus.notify.bind(self));
    _$alphabetButton.click(_alphabetButtonEventBus.notify.bind(self));
  }

  function setupModelEventHandlers(self) {
    _model.wordUpdateEventBus.onEvent(updateGui.bind(self));
    _model.definitionEventBus.onEvent(updateGui.bind(self));
    _model.guessesEventBus.onEvent(updateGui.bind(self));
    _model.scoreEventBus.onEvent(updateGui.bind(self));
  }

  function updateGui() {
    _$wordDisplay.html(model.getGuessedWord());
    _$definition.html(model.getDefinition());
    _$guesses.html("Guess " + model.getGuesses() + "/7");
    _$score.html("Score: " + model.getScore());
  }

  // Setup
  buildDomTree();
  setupGuiEventHandlers(this);
  setupModelEventHandlers(this);
  model.startGame();
  updateGui();

  // Public API
  this.$ = _$[0];
  this.resetButtonEventBus = _resetButtonEventBus;
  this.alphabetButtonEventBus = _alphabetButtonEventBus;
};