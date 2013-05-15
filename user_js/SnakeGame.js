/**
 * Class SnakeGame
 *  TODO TOTALLY UNFINISHED DUNO WHAT IM DOING HERE DUNO IF THIS WILL BE USED ATALL
 **/
SnakeGame = (function () {
  var Extending = TimedGame;

  var Class = function (_set) {
    Extending.apply(this, arguments);

    this.originalSettings = _set;

    this.newGame(_set);
  }

  Class.prototype = $.extend(Object.create(Extending.prototype), {
    constructor : Class,
    
    reset : function () {
      this.pause();
      this.cleanUp();
      this.setUpGame();
    },
    score : function () {
      return this.playerScore;
    },
    advance : function () {
      if (this.snake.isDead()) {
        this.gameOver();
      } else if (this.snakeOnApple()) {
        this.snakeHitApple();
        this.snake.advance();
      } else {
        this.snake.advance();
      }
    },
    gameOver : function () {
      this.updateBestScore();
      this.newGame();
    },
    updateBestScore : function () {
      var curBest = $('#bestScoreDisplay').html();
      var score = this.score();
      if (curBest < score) {
        $('#bestScoreDisplay').html(score);
      }
    },
    snakeOnApple : function () {
      return this.snake.head.x == this.apple.x && this.snake.head.y == this.apple.y;
    },
    snakeHitApple : function () {
      this.snake.eat(this.apple.size);
      this.updateScore(this.apple.size);
      this.apple.destroy();
      this.apple = new Apple({grid: this.grid});
    },
    updateScore : function (_scoreGain) {
      this.playerScore += _scoreGain;
      $("#scoreDisplay").html(this.score());
    },
    setNextSnakeDirection : function (_dir) {
      if (this.isPaused()) {
        this.play();
      }
      this.snake.setNextDirection(_dir);
    },
    newGame : function () {
      if (this.gameSetUp) {
        this.reset();
      } else {
        this.setUpGame();
      }
    },
    cleanUp : function () {
      this.snake.destroy();
      this.grid.destroy();
      this.apple.destroy();
    },
    setUpGame : function () {
    
      this.grid = new Grid({ cols: GAME.field.cols, rows: GAME.field.rows });

      this.snake = new Snake( { 
        x: GAME.snake.playerBegin.x,
        y: GAME.snake.playerBegin.y,
        dir: GAME.snake.playerBegin.dir,
        length: GAME.snake.playerBegin.length,
        grid: this.grid
      });

      this.apple = new Apple({grid : this.grid});

      this.playerScore = 0;

      this.gameSetUp = true;
    }
  });

  return Class;
})();