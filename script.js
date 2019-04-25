var gcanvas_id = null;
var gcanvas = null;

var particles = [];

//
var maximum_amount_of_particles = 350;
var kernal = 225;

function main()
{
  init();
  draw();
}

function getCanvasHeight()
{
  return gcanvas_id.clientHeight;
}

function getCanvasWidth()
{
  return gcanvas_id.clientWidth;
}


function init()
{
    var canvas_identity = document.getElementById("proximity");
    var canvas = canvas_identity.getContext("2d");

    gcanvas_id = canvas_identity;
    gcanvas = canvas;
}

function draw()
{
  calculate();

  clean();
  rasterize();

  window.requestAnimationFrame( draw );
}

function calculate()
{
  var x = null;




}

function clean()
{
  gcanvas.clearRect( 0, 0,
                     getCanvasWidth(), getCanvasHeight() );
}

function rasterize()
{
  var x = null;

  for(  x = 0;
        x < particles.length;
        x ++ )
  {
    var particle = particles[x];

    var y = null;



  }

}

main()
