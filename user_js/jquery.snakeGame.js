(function ( $, document, window, undefined ){

  var settings = {
    jQueryNameSpace : 'snakeGame'
  };

  var game = null;

  var methods = {
    init : initialize
  };

  function initialize(_settings) {
    $.extend(settings, _settings);
    keyHandlerSetup();
    newGame();
  }

  function keyHandlerSetup() {
    $(document).keydown(keyDownHandler);
  }

  function newGame() {
    game = new SnakeGame({interval: GAME.snake.timeStepInterval});
  }

  var keyCodes = {
    37 : 'leftArrow',
    38 : 'upArrow',
    39 : 'rightArrow',
    40 : 'downArrow',
    65 : 'a',
    87 : 'w',
    68 : 'd',
    83 : 's',
    78 : 'n',
    80 : 'p',
    32 : 'space'
  };

  var keyDownHandlers = {
    leftArrow : handleChangeDir('west'),
    upArrow : handleChangeDir('north'),
    rightArrow : handleChangeDir('east'),
    downArrow : handleChangeDir('south'),
    a : handleChangeDir('west'),
    w : handleChangeDir('north'),
    d : handleChangeDir('east'),
    s : handleChangeDir('south'),
    n : resetGame,
    p : pauseGame,
    space: pauseGame
  };

  function keyDownHandler(e, sym) {
    var code = e ? e.which : -1;
    var keyName = keyCodes[code];
    var handler = keyDownHandlers[keyName];

    if (typeof handler === "function") {
      handler.apply(this, arguments);
    }

    console.log('Keydown. Code: ' + code);
  }

  function resetGame() {
    game.reset();
  }

  function pauseGame() {
    game.togglePause();
  }

  function handleChangeDir(dir) {
    return changeDollDir.bind(this, dir);
  }

  function changeDollDir(dir) {
    game.setNextSnakeDirection(dir);
  }

  $.fn[settings.jQueryNameSpace] = function( method ) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if (typeof method === 'object' || ! method ) {
      return methods.init.apply(this, arguments );
    } else {
      $.error( 'Method ' + method + 
           ' does not exist on jQuery.' + settings.jQueryNameSpace );
    }
  };
})( jQuery, document, window, undefined );