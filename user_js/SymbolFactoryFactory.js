/**
 * class SymbolFactory
 *
 * This function produces an object which knows how to create Symbols of 
 * a certain type on a certain container (defaults to Stage). These 
 * Symbols should be readily positioned using the CSS absolute 
 * positioning conventions.
 * 
 * The class once created provides useful information about the stage
 * and symbol as own properties
 **/
SymbolFactory = (function () {
  function SymbolFactoryConstructor(_composition, _symbolName, _containerName) {
    _containerName = _containerName || 'Stage';
    var stageSym = getStageSymbol(_composition);
    var containerSym = stageSym.getSymbol(_containerName);

    Object.defineProperties(this, {
      'compositionHandle': {
        value: _composition,
        writable: false
      },
      'containerName': {
        value: _containerName,
        writable: false
      },
      'symbolName': {
        value: _symbolName,
        writable: false
      },
      'stageSymbol': {
        value: stageSym,
        writable: false
      },
      'containerSymbol': {
        value: containerSym,
        writable: false
      }
    });
  }

  function getStageSymbol(_composition) {
    return AdobeEdge.getComposition(_composition).getStage();
  }

  Object.defineProperties(SymbolFactoryConstructor.prototype, {
    createSymbol : {
      value : thisCreatePositionedSymbol
    }
  });

  function thisCreatePositionedSymbol(_config) {
    var sym = buildAdobeSymbol.call(this);
    var $el = sym.getSymbolElement();

    $el.css($.extend({
      'position': 'absolute'
    }, _config));

    return sym;
  }

  function buildAdobeSymbol() {
    return this.stageSymbol.createChildSymbol(this.symbolName,
      this.containerName);
  }

  return SymbolFactoryConstructor;
})();