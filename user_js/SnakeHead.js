/**
 * Class SnakeHead extends MovingDoll
 *
 * SnakeHead Objects know how to move an AEA snakehead symbol around with it
 **/
SnakeHead = (function () {
  var Extending = AnimateMovingDoll;

  var Class = function (_set) {
    Extending.call(this, $.extend(_set, {
      composition : GAME.AEA.composition,
      symbolHeight: GAME.AEA.symbols.head.height, // in px
      symbolWidth: GAME.AEA.symbols.head.width, 
      symbolName: GAME.AEA.symbols.head.name,
      symbolContainer: GAME.AEA.symbols.head.container
    }));

    this.grid = _set.grid;
  }

  Class.prototype = $.extend(Object.create(Extending.prototype), {
    constructor : Class,
    
    advance : function () {
      this.grid.delete(this.x, this.y);
      Extending.prototype.advance.apply(this);

      var stillAlive = true;
      if (!this.grid.safeSet(this.x, this.y, 'snakehad')) {
        stillAlive = false;
      }

      return stillAlive;
    }
  });

  return Class;
})();