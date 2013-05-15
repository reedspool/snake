function JAS(namespace, toBeNamespaced) {
  
  var lineage = namespace.split('.');
  var drill = JAS; 
  
  // If the namespace string starts with 'JAS', ignore it
  if (lineage[0] == 'JAS') {
    lineage.shift();
  }
  
  for (var i = 0; i < lineage.length - 1; i++) {
    
    var name = lineage[i];
    
    drill[name] = drill[name] || {};
    
    drill = drill[name];
  }
  
  switch (typeof toBeNamespaced) {
  case 'function':
    toBeNamespaced = toBeNamespaced();
    break;
  }
  
  var name = lineage[lineage.length - 1];
  drill[name] = toBeNamespaced;
}

function EDGELIB(namespace, toBeNamespaced) {
  
  var lineage = namespace.split('.');
  var drill = EdgeLib; 
  
  // If the namespace string starts with 'EdgeLib', ignore it
  if (lineage[0] == 'EdgeLib') {
    lineage.shift();
  }
  
  for (var i = 0; i < lineage.length - 1; i++) {
    
    var name = lineage[i];
    
    drill[name] = drill[name] || {};
    
    drill = drill[name];
  }
  
  switch (typeof toBeNamespaced) {
  case 'function':
    toBeNamespaced = toBeNamespaced();
    break;
  }
  
  var name = lineage[lineage.length - 1];
  drill[name] = toBeNamespaced;
}

