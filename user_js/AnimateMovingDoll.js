/**
 * Class AnimateMovingDoll
 **/
AnimateMovingDoll = (function () {
  var Extending = MovingDoll;

  var Class = function (_set) {
    Extending.apply(this, arguments);

    this.originalSettings = _set;

    this.symbolHeight = _set.symbolHeight;
    this.symbolWidth = _set.symbolWidth;

    this.symbolName = _set.symbolName;
    this.edgeComposition = _set.composition;
    this.symbolContainer = _set.symbolContainer;

    this.symbolFactory = new SymbolFactory(this.edgeComposition,
      this.symbolName, this.symbolContainer);
    
    this.symbol = this.symbolFactory.createSymbol();
    var $el = this.symbol.getSymbolElement();
    setPosition.apply(this,[$el]);
    rotate($el, this.direction);
  }

  Class.prototype = $.extend(Object.create(Extending.prototype), {
    constructor : Class,
    move : function () {
      Extending.prototype.move.apply(this, arguments);
      var $el = this.symbol.getSymbolElement();
      setPosition.apply(this, [$el]);
      rotate($el, this.direction);
    },
    destroy : function () {
      this.symbol.deleteSymbol();
    }
  });

  var setPosition = function($el) {
    $el.css({
      top : this.y * this.symbolHeight,
      left : this.x * this.symbolWidth
    });    
  };

  var rotate = function($el, _dir) {
    var prefix = 'translate(0px, 0px) rotate(';
    var suffix = 'deg) scale(1, 1)';

    $el.css('-webkit-transform-origin', '50% 50%');

    $el.css('-webkit-transform', 
      prefix + GAME.AEA.symbols.translationDegrees[_dir] + suffix);
  };

  return Class;
})();