/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'DollWrapper',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Group2',
            type:'group',
            rect:['0px','0px','600','400','auto','auto'],
            c:[
            {
               id:'Rectangle',
               type:'rect',
               rect:['0px','0px','200px','400px','auto','auto'],
               fill:["rgba(171,111,111,0.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'RectangleCopy',
               type:'rect',
               rect:['200px','0px','200px','200px','auto','auto'],
               fill:["rgba(231,139,139,0.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'RectangleCopy3',
               type:'rect',
               rect:['200px','200px','200px','200px','auto','auto'],
               fill:["rgba(231,139,139,0.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'RectangleCopy2',
               type:'rect',
               rect:['400px','0px','200px','400px','auto','auto'],
               fill:["rgba(231,139,139,0.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         },
         {
            id:'SnakeWrapper',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            transform:[[],['0deg']]
         },
         {
            id:'SnakeHead',
            type:'rect',
            rect:['-50px','-2px','auto','auto','auto','auto']
         },
         {
            id:'SnakeStraightSegment',
            type:'rect',
            rect:['-50px','23px','auto','auto','auto','auto']
         },
         {
            id:'SnakeLeftSegment',
            type:'rect',
            rect:['-50px','50px','auto','auto','auto','auto'],
            transform:[[],['0deg']]
         },
         {
            id:'SnakeRightSegment',
            type:'rect',
            rect:['-50px','80px','auto','auto','auto','auto']
         },
         {
            id:'Apple',
            type:'rect',
            rect:['-48','111','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'SnakeLeftSegment',
            symbolName:'SnakeLeftSegment'
         },
         {
            id:'DollWrapper',
            symbolName:'DollWrapper'
         },
         {
            id:'Apple',
            symbolName:'Apple'
         },
         {
            id:'SnakeWrapper',
            symbolName:'SnakeWrapper'
         },
         {
            id:'SnakeRightSegment',
            symbolName:'SnakeRightSegment'
         },
         {
            id:'SnakeHead',
            symbolName:'SnakeHead'
         },
         {
            id:'SnakeStraightSegment',
            symbolName:'SnakeStraightSegment'
         }
         ]
      },
   states: {
      "Base State": {
         "${_DollWrapper}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Apple}": [
            ["style", "left", '-50px'],
            ["style", "top", '112.37px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '200px'],
            ["style", "height", '200px'],
            ["color", "background-color", 'rgba(231,139,139,0.00)'],
            ["style", "left", '200px'],
            ["style", "width", '200px']
         ],
         "${_SnakeStraightSegment}": [
            ["style", "left", '-50px'],
            ["style", "top", '22.64px']
         ],
         "${_SnakeLeftSegment}": [
            ["style", "top", '50px'],
            ["style", "left", '-50px']
         ],
         "${_SnakeRightSegment}": [
            ["style", "left", '-50px'],
            ["style", "top", '80px']
         ],
         "${_RectangleCopy}": [
            ["style", "height", '200px'],
            ["color", "background-color", 'rgba(231,139,139,0.00)'],
            ["style", "left", '200px'],
            ["style", "width", '200px']
         ],
         "${_RectangleCopy2}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(231,139,139,0.00)'],
            ["style", "left", '400px'],
            ["style", "width", '200px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(48,48,48,1.00)'],
            ["style", "width", '588px'],
            ["style", "height", '399px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(171,111,111,0.00)'],
            ["style", "width", '200px']
         ],
         "${_SnakeHead}": [
            ["style", "left", '-50.1px'],
            ["style", "top", '-2px']
         ],
         "${_SnakeWrapper}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Doll": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','20px','20px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(62,177,55,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '20px'],
            ["color", "background-color", 'rgba(55,165,177,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2139,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(152,55,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55,165,177,1.00)'}], position: 0, duration: 713 },
            { id: "eid5", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(177,102,55,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(152,55,177,1.00)'}], position: 713, duration: 713 },
            { id: "eid4", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(55,165,177,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(177,102,55,1.00)'}], position: 1426, duration: 713 }         ]
      }
   }
},
"DollWrapper": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SnakeHead": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-46px','-12px','89px','45px','auto','auto'],
      id: 'itsASnake2',
      transform: [{},['90deg']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','snake_images/itsASnake.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_itsASnake2}": [
            ["style", "top", '21px'],
            ["style", "left", '-23px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '21px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid84", tween: [ "transform", "${_itsASnake2}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "transform", "${_itsASnake2}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 1882, duration: 0 },
            { id: "eid82", tween: [ "style", "${_itsASnake2}", "left", '-23px', { fromValue: '-23px'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_itsASnake2}", "left", '-1px', { fromValue: '-23px'}], position: 1882, duration: 0 },
            { id: "eid83", tween: [ "style", "${_itsASnake2}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid79", tween: [ "style", "${_itsASnake2}", "top", '-1px', { fromValue: '21px'}], position: 1882, duration: 0 }         ]
      }
   }
},
"SnakeWrapper": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SnakeStraightSegment": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-45px','-2px','89px','45px','auto','auto'],
      id: 'itsASnake4',
      transform: [{},['270deg']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','snake_images/itsASnake.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '21px']
         ],
         "${_itsASnake4}": [
            ["style", "top", '-1px'],
            ["style", "left", '-45px'],
            ["transform", "rotateZ", '90deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid77", tween: [ "style", "${_itsASnake4}", "top", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_itsASnake4}", "top", '-23px', { fromValue: '-1px'}], position: 131, duration: 0 }         ]
      }
   }
},
"SnakeLeftSegment": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'itsASnake5',
      type: 'image',
      rect: ['-67px','-2px','89px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','snake_images/itsASnake.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_itsASnake5}": [
            ["style", "left", '-67px'],
            ["style", "top", '-2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '21px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 308,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SnakeRightSegment": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-24px','20px','89px','45px','auto','auto'],
      id: 'itsASnake6',
      transform: [{},['270deg']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','snake_images/itsASnake.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_itsASnake6}": [
            ["style", "top", '20px'],
            ["style", "left", '-24px'],
            ["transform", "rotateZ", '270deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '21px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 310,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Apple": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'apple4',
      type: 'image',
      rect: ['0px','0px','23px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','snake_images/apple.gif','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1164,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19599898");
