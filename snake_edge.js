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
         "${_SnakeLeftSegment}": [
            ["style", "top", '50px'],
            ["style", "left", '-50px']
         ],
         "${_SnakeStraightSegment}": [
            ["style", "left", '-50px'],
            ["style", "top", '22.64px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '200px'],
            ["style", "height", '200px'],
            ["color", "background-color", 'rgba(231,139,139,0.00)'],
            ["style", "left", '200px'],
            ["style", "width", '200px']
         ],
         "${_SnakeRightSegment}": [
            ["style", "left", '-50px'],
            ["style", "top", '80px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(231,139,139,0.00)'],
            ["style", "height", '200px'],
            ["style", "left", '200px'],
            ["style", "width", '200px']
         ],
         "${_RectangleCopy2}": [
            ["color", "background-color", 'rgba(231,139,139,0.00)'],
            ["style", "height", '400px'],
            ["style", "left", '400px'],
            ["style", "width", '200px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '600px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(171,111,111,0.00)'],
            ["style", "height", '400px'],
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','20px','20px','auto','auto'],
      fill: ['rgba(62,177,55,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '20px'],
            ["color", "background-color", 'rgba(55,165,177,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '20px']
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
      rect: ['0px','0px','20px','20px','auto','auto'],
      borderRadius: ['7px 7px','7px 7px','7px 7px','7px 7px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(110,182,122,1.00)']
   },
   {
      rect: ['4px','0px','20px','31px','auto','auto'],
      id: 'Text',
      text: 'A',
      font: ['Arial, Helvetica, sans-serif',18,'rgba(0,0,0,1)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(110,182,122,1.00)'],
            ["style", "border-bottom-left-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-top-right-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "border-top-left-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '30.660430908203px'],
            ["style", "font-size", '18px'],
            ["style", "left", '4px'],
            ["style", "width", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '20px']
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
      id: 'segment1',
      type: 'image',
      rect: ['0px','0px','20px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','snake_images/segment1.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','20px','20px','auto','auto'],
      id: 'segment2',
      fill: ['rgba(0,0,0,0)','snake_images/segment2.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','20px','20px','auto','auto'],
      id: 'segment3',
      fill: ['rgba(0,0,0,0)','snake_images/segment3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_segment1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_segment3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_segment2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 304,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "style", "${_segment3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_segment3}", "display", 'block', { fromValue: 'none'}], position: 202, duration: 0 },
            { id: "eid14", tween: [ "style", "${_segment1}", "display", 'none', { fromValue: 'block'}], position: 100, duration: 0 },
            { id: "eid13", tween: [ "style", "${_segment2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_segment2}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0 },
            { id: "eid16", tween: [ "style", "${_segment2}", "display", 'none', { fromValue: 'block'}], position: 202, duration: 0 }         ]
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
      id: 'left_turn_1',
      type: 'image',
      rect: ['0px','0px','20px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','snake_images/left_turn_1.png','0px','0px']
   },
   {
      rect: ['0px','0px','20px','20px','auto','auto'],
      id: 'left_turn_2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','snake_images/left_turn_2.png','0px','0px']
   },
   {
      rect: ['0px','0px','20px','20px','auto','auto'],
      id: 'left_turn_3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','snake_images/left_turn_3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_left_turn_2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_left_turn_3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_left_turn_1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '20px']
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
            { id: "eid21", tween: [ "style", "${_left_turn_1}", "display", 'none', { fromValue: 'block'}], position: 121, duration: 0 },
            { id: "eid19", tween: [ "style", "${_left_turn_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_left_turn_2}", "display", 'block', { fromValue: 'none'}], position: 121, duration: 0 },
            { id: "eid22", tween: [ "style", "${_left_turn_2}", "display", 'none', { fromValue: 'block'}], position: 198, duration: 0 },
            { id: "eid18", tween: [ "style", "${_left_turn_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_left_turn_3}", "display", 'block', { fromValue: 'none'}], position: 198, duration: 0 }         ]
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
      id: 'right_turn_1',
      type: 'image',
      rect: ['0px','0px','20px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','snake_images/right_turn_1.png','0px','0px']
   },
   {
      rect: ['0px','0px','20px','20px','auto','auto'],
      id: 'right_turn_2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','snake_images/right_turn_2.png','0px','0px']
   },
   {
      rect: ['0px','0px','20px','20px','auto','auto'],
      id: 'right_turn_3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','snake_images/right_turn_3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_right_turn_1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '20px']
         ],
         "${_right_turn_3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_right_turn_2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
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
            { id: "eid24", tween: [ "style", "${_right_turn_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_right_turn_3}", "display", 'block', { fromValue: 'none'}], position: 204, duration: 0 },
            { id: "eid25", tween: [ "style", "${_right_turn_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "style", "${_right_turn_2}", "display", 'block', { fromValue: 'none'}], position: 105, duration: 0 },
            { id: "eid28", tween: [ "style", "${_right_turn_2}", "display", 'none', { fromValue: 'block'}], position: 204, duration: 0 },
            { id: "eid27", tween: [ "style", "${_right_turn_1}", "display", 'none', { fromValue: 'block'}], position: 105, duration: 0 }         ]
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
      rect: ['-9px','-8px','37px','38px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      opacity: 0.009765625,
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(240,27,27,1)']
   },
   {
      rect: ['0px','0px','20px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(240,27,27,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '-5px'],
            ["style", "height", '30px'],
            ["style", "opacity", '0.42889404296875'],
            ["style", "left", '-5px'],
            ["style", "width", '30px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(149,28,28,1.00)'],
            ["style", "left", '-0.02px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1164.765625,
         autoPlay: true,
         timeline: [
            { id: "eid41", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '0.42889404296875'}], position: 0, duration: 582 },
            { id: "eid49", tween: [ "style", "${_Ellipse2}", "opacity", '0.42889404296875', { fromValue: '0'}], position: 582, duration: 582 },
            { id: "eid31", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(240,27,27,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(149,28,28,1.00)'}], position: 0, duration: 582 },
            { id: "eid45", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(149,28,28,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(240,27,27,1)'}], position: 582, duration: 582 }         ]
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
