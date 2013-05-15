GAME = {
  field : {
    rows : 20,
    cols : 30,
    width : 600,
    height: 400
  },
  snake : {
    timeStepInterval : 75,
    playerBegin : {
      x : 10,
      y : 10,
      dir: 'east',
      length: 5
    }
  },
  apple : {
    length : 3
  },
  AEA : {
    composition :'EDGE-19599898',
    symbols : {
      head : {
        height: 20,
        width: 20,
        name: 'SnakeHead',
        container: 'SnakeWrapper'
      },
      tail : {
        height : 20,
        width : 20,
        container: 'SnakeWrapper',
        names : {
          left : 'SnakeLeftSegment',
          right: 'SnakeRightSegment',
          straight: 'SnakeStraightSegment'
        }
      },
      apple : {
        height : 20,
        width : 20,
        container: 'SnakeWrapper',
        name: 'Apple'
      },
      translationDegrees : {
        'south': 180,
        'west': 270,
        'north': 0,
        'east': 90
      }
    }
  }
};