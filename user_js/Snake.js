/**
 * class Snake
 *
 * This class represents a 'Snake' on a 2D grid. It connects a SnakeHead with
 * a SnakeTail
 *
 **/
function Snake(_set) {
  this.grid = _set.grid;

  this.head = new SnakeHead(_set);
  this.tail = new SnakeTail({
    length: _set.length,
    grid: _set.grid
  });

  this.length = _set.length;
  this.digesting = _set.length;
  this.dead = false;
};

Snake.prototype.changeDirection = function(_dir) {
  this.head.setNextDirection(_dir);
};

Snake.prototype.advance = function() {
  this.digest();
  this.tail.setUpNextSegment({
    x: this.head.x,
    y: this.head.y,
    digesting: this.digesting,
    turn: this.computeTurn(),
    dir: this.head.direction
  });

  var died = !this.head.advance();
  if (died) {
    this.die();
  }
  this.tail.advance();
};

Snake.prototype.die = function () {
  this.dead = true;
};

Snake.prototype.isDead = function() {
  return this.dead;
}

Snake.prototype.setNextDirection = function (_dir) {
  if (!this.attemptingBackwards(_dir)) {
    this.head.setNextDirection(_dir);
  }
};

Snake.prototype.attemptingBackwards = function (_dir) {
  var goingBackwards = {
    'south' : 'north',
    'north' : 'south',
    'west' : 'east',
    'east' : 'west'
  }

  return goingBackwards[this.head.direction] == _dir;
};

Snake.prototype.eat = function (_length) {
  this.digesting += _length;
};

Snake.prototype.digest = function () {
  if (this.digesting > 0) {
    this.digesting--;
  } else {
    // do nothing
  }
};

Snake.prototype.computeTurn = function() {
  var last = this.head.direction;
  var current = this.head.nextDirection;
  var lastDirToDirToTurn = {
    'west': {
      'west': 'straight',
      'north': 'right',
      'south': 'left'
    },
    'east': {
      'east': 'straight',
      'south': 'right',
      'north': 'left'
    },
    'south': {
      'west': 'right',
      'east': 'left',
      'south': 'straight'
    },
    'north': {
      'north': 'straight',
      'east': 'right',
      'west': 'left'
    }
  };

  return lastDirToDirToTurn[last][current]
};

Snake.prototype.destroy = function () {
  this.head.destroy();
  this.tail.destroyAll();
}