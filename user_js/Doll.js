// Simple Doll Class which moves on 2-d grid
Doll = (function () {

  var Doll = function(_set) {
    this.x = _set.x;
    this.y = _set.y;
    this.direction = _set.dir;
    this.lastDirection = _set.dir;
    this.originalSettings = _set;
  };

  Doll.MOVE_DIRS = { 
    'south': { x: 0, y: 1},
    'west':  { x:-1, y: 0},
    'north': { x: 0, y:-1},
    'east':  { x: 1, y: 0}
  };

  Doll.prototype.move = function(_dir) {
    var nextPos = this.nextPosition(_dir);

    this.lastDirection = this.direction;
    this.direction = _dir;

    this.x = nextPos.x;
    this.y = nextPos.y;
  };

  Doll.prototype.nextPosition = function(_dir) {
    var md = Doll.MOVE_DIRS[_dir];

    return {x: this.x + md.x, y: this.y + md.y};
  };

  Doll.prototype.reset = function() {
    this.x = this.originalSettings.x;
    this.y = this.originalSettings.y;
    this.direction = this.originalSettings.dir;
  };

  return Doll;
})();