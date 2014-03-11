/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Doll'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2139, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Doll");
   //Edge symbol end:'Doll'

   //=========================================================
   
   //Edge symbol: 'DollWrapper'
   (function(symbolName) {   
   
   })("DollWrapper");
   //Edge symbol end:'DollWrapper'

   //=========================================================
   
   //Edge symbol: 'SnakeHead'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("SnakeHead");
   //Edge symbol end:'SnakeHead'

   //=========================================================
   
   //Edge symbol: 'SnakeWrapper'
   (function(symbolName) {   
   
   })("SnakeWrapper");
   //Edge symbol end:'SnakeWrapper'

   //=========================================================
   
   //Edge symbol: 'SnakeStraightSegment'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("SnakeStraightSegment");
   //Edge symbol end:'SnakeStraightSegment'

   //=========================================================
   
   //Edge symbol: 'SnakeLeftSegment'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 308, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("SnakeLeftSegment");
   //Edge symbol end:'SnakeLeftSegment'

   //=========================================================
   
   //Edge symbol: 'SnakeRightSegment'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 310, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("SnakeRightSegment");
   //Edge symbol end:'SnakeRightSegment'

   //=========================================================
   
   //Edge symbol: 'Apple'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1164, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Apple");
   //Edge symbol end:'Apple'

})(jQuery, AdobeEdge, "EDGE-19599898");