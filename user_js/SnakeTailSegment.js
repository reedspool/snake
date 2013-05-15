/**
 * Class SnakeTailSegment
 * 
 * A segment of the snake which contains a correctly 
 * positioned segment symbol
 **/
function SnakeTailSegment(_set) {
  this.doll = new AnimateMovingDoll($.extend(_set, {
    symbolName: GAME.AEA.symbols.tail.names[_set.turn],
    direction: _set.turn
  }));
}

SnakeTailSegment.prototype.destroy = function () {
  this.doll.symbol.deleteSymbol();
};