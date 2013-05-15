/**
 * Class MovingDoll extends Doll
 *
 * A MovingDoll is constantly moving
 **/
MovingDoll = (function () {
  var Extending = Doll;

  var Class = function (_set) {
    Extending.apply(this, arguments);

    this.nextDirection = _set.dir;
  }

  Class.prototype = $.extend(Object.create(Extending.prototype), {
    constructor : Class,

    setNextDirection : function(_dir) {
      this.nextDirection = _dir;
    },

    advance : function() {
      this.move(this.nextDirection);
    }
  });

  return Class;
})();