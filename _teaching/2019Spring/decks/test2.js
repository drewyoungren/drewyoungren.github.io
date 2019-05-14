var data = null;
var graph = null;

function custom(x, y, t) {
  return Math.sin(x/50 + t/10) * Math.cos(y/50 + t/10) * 50 + 50;
}

// Called when the Visualization API is loaded.
function drawVisualization() {
  // Create and populate a data table.
  data = new vis.DataSet();
  // create some nice looking data with sin/cos
  var steps = 25;
  var axisMax = 314;
  var tMax = 31;
  var axisStep = axisMax / steps;
  for (var t = 0; t < tMax; t++) {
    for (var x = 0; x < axisMax; x+=axisStep) {
      for (var y = 0; y < axisMax; y+=axisStep) {
        var value = custom(x, y, t);
        data.add([
          {x:x,y:y,z:value,filter:t,style:value}
        ]);
      }
    }
  }

  // specify options
  var options = {
    width:  '600px',
    height: '600px',
    style: 'surface',
    showPerspective: true,
    showGrid: true,
    showShadow: false,
    // showAnimationControls: false,
    keepAspectRatio: true,
    verticalRatio: 0.5,
    animationInterval: 100, // milliseconds
    animationPreload: true
  };


  // create our graph
  var container = document.getElementById('mygraph');
  graph = new vis.Graph3d(container, data, options);
}

drawVisualization();
