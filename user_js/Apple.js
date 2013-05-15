/**
 * Class Apple
 *
 **/
Apple = (function () {
  var Extending = AnimateMovingDoll;

  var Class = function (_set) {
    this.grid = _set.grid
    var loc = this.grid.randomEmptyLocation();
    _set.x = loc.c;
    _set.y = loc.r;

    Extending.call(this, $.extend(_set, {
      composition : GAME.AEA.composition,
      symbolHeight: GAME.AEA.symbols.apple.height, // in px
      symbolWidth: GAME.AEA.symbols.apple.width, 
      symbolName: GAME.AEA.symbols.apple.name,
      symbolContainer: GAME.AEA.symbols.apple.container

    }));

    this.size = GAME.apple.length;
  }

  Class.prototype = $.extend(Object.create(Extending.prototype), {
    constructor : Class
  });

  return Class;
})();