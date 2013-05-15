// Simple Grid class, a 2D surface for the Simple Doll
function Grid(_set) {
  this.cols = _set.cols;
  this.rows = _set.rows;
  this.emptyMarker = _set.empty || null;
  this.grid = Grid.filled2dArray(this.cols, this.rows, this.emptyMarker);

  this.original_settings = _set;
}

Grid.filled2dArray = function(cols, rows, fillWith) {
  var ret = [];
  for( var i = 0; i < cols; i++) {
    var col = [];
    for ( var j = 0; j < rows; j++) {
      col[j] = fillWith;
    }
    ret[i] = col
  }
  return ret;
};

Grid.prototype.get = function(_c, _r) {
  return this.grid[_c][_r];
};

Grid.prototype.set = function(_c, _r, _val) {
  this.grid[_c][_r] = _val;
};

Grid.prototype.delete = function(_c, _r) {
  this.grid[_c][_r] = this.emptyMarker;
};
  
Grid.prototype.safeSet = function(_c, _r, _val) {
  if (this.inBounds(_c, _r) && this.isEmpty(_c, _r)) {
    this.set(_c, _r, _val);
    return true;
  } else {
    return false;
  }
};

Grid.prototype.destroy = function() {
  // clean up everything... right now it's just an array so whatever do nothing
};

Grid.prototype.inBounds = function(_c, _r) {
  return (_c >= 0) && (_c < this.cols) &&
    (_r >= 0) && (_r < this.rows);
};

Grid.prototype.isEmpty = function(_c, _r) {
  return this.grid[_c][_r] == this.emptyMarker;
};

Grid.prototype.randomEmptyLocation = function() {
  var loc;
  do {
    loc = {r : randInt(0, this.rows), c : randInt(0, this.cols)};
  } while (! this.isEmpty(loc.c, loc.r));

  return loc;
};

function randInt(a, bExc) {
  return Math.floor(Math.random() * (bExc - a)) + a;
}