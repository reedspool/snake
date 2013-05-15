/**
 * Class SnakeTail
 *
 * Creates tail symbols and destroys the last one when
 * not digesting an apple
 **/
function SnakeTail(_set) {
  this.segments = [];
  this.digesting = _set.length;
  this.grid = _set.grid;
}

SnakeTail.prototype.setUpNextSegment = function (_set) {
  this.nextSegmentSettings = $.extend(_set, {
    symbolHeight: GAME.AEA.symbols.tail.height,
    symbolWidth: GAME.AEA.symbols.tail.width,
    composition: GAME.AEA.composition,
    symbolContainer: GAME.AEA.symbols.tail.container
  });

  this.digesting = _set.digesting;
};

SnakeTail.prototype.advance = function () {
  var newSeg = this.createSegment(this.nextSegmentSettings);

  if (!this.grid.safeSet(newSeg.doll.x, newSeg.doll.y, 'snakeSeg')) {
    console.log('aaaah! on tail set');
    console.log(this.grid);
    console.log(newSeg);
  }

  this.segments.unshift(newSeg);

  if (this.digesting == 0) {
    this.destroyLast();
  } else {
    // do nothing
  }
};

SnakeTail.prototype.destroyAll = function () {
  while (this.segments.length > 0) {
    this.destroyLast();
  }
};

SnakeTail.prototype.destroyLast = function () {
  var seg = this.segments.pop();
  this.grid.delete(seg.doll.x, seg.doll.y);
  seg.destroy();
};

SnakeTail.prototype.createSegment = function (_set) {
  return new SnakeTailSegment(_set);
};