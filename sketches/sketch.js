
var graphmetric = function(p) { 

  var margin= 15;
  var ww = p.windowWidth;
  var wh = p.windowHeight;

  var grid = {
    unit: 10,
    color: 'rgba(100,110,110,0.5)',
    stroke: 'rgba(255,69,0,0.1)',
    strokeWeight: 1
  };

  var isMousePressed = false;
  p.mousePressed = function() {
    isMousePressed = true;
  }
  p.mouseReleased = function() {
    isMousePressed = false;
  }

  p.setup = function() {
    p.createCanvas((ww - margin),(wh - margin));
    p.stroke(grid.stroke);
    for (var i = 0; i < ww; i += grid.unit) {
      for (var j = 0; j < wh; j += grid.unit) {
        p.rect(i, j, grid.unit, grid.unit);
      }
    }
  }

  p.draw = function() {
    if (!isMousePressed) {
      return;
    }
    else {
      var position = p.getSquare(p.mouseX, p.mouseY);
      // strokeWeight( grid.strokeWeight );
      p.stroke(grid.stroke);
      p.fill(grid.color);
      p.rect(position.x, position.y, grid.unit, grid.unit);
    }
  }

  p.getSquare = function(x,y) {
    var targetSquare = {
      x: ((Math.ceil(x/grid.unit) * grid.unit) - grid.unit),
      y: ((Math.ceil(y/grid.unit) * grid.unit) - grid.unit)
    };
    return targetSquare;
  }

  p.windowResized = function() {
    p.resizeCanvas((ww - margin),(wh - margin));
  }

};

var graph = new p5(graphmetric);
