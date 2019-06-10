// Canvas Area
var gcanvas_id = null;
var gcanvas = null;

// Canvas Area
var maximum_amount_of_particles = 350;
var kernal = 225;

function getCanvasHeight()
{
  return gcanvas_id.clientHeight;
}

function getCanvasWidth()
{
  return gcanvas_id.clientWidth;
}

// Business Logic
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
  //

  //

}

function clean()
{
  gcanvas.clearRect( 0, 0,
                     getCanvasWidth(), getCanvasHeight() );
}

function rasterize()
{

}

//
function main()
{
  init();
  draw();
}

main()
