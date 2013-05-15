/**
 * Class SnakeGame
 *  TODO TOTALLY UNFINISHED DUNO WHAT IM DOING HERE DUNO IF THIS WILL BE USED ATALL
 **/
TimedGame = (function () {

  var Class = function (_set) {
    this.intervalID = null;
    this.intervalLength = _set.interval;
  };

  Class.prototype = {
    constructor : Class,
    
    play : function () {
      context = this;
      this.intervalID = setInterval(function () {context.advance()}, this.intervalLength);    
    },
    pause : function () {
      clearInterval(this.intervalID);
      this.intervalID = null;
    },
    togglePause : function () {
      if (this.isPaused()) {
        this.play();
      } else {
        this.pause();
      }
    },
    advance : function () {
      // OVERRIDE
    },
    isPaused : function () {
      return this.intervalID == null;
    }
  };

  return Class;
})();