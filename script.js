var gcanvas_id = null;
var gcanvas = null;

var particles = [];

function main()
{
  init();
  draw();
}

function draw_position( x, y )
{
  gcanvas.beginPath();

  gcanvas.arc( x, y, // Position
               2,    // Radius
               0, 2 * Math.PI);

  gcanvas.stroke();

}

function init()
{
    var canvas_identity = document.getElementById("proximity");
    var canvas = canvas_identity.getContext("2d");

    gcanvas_id = canvas_identity;
    gcanvas = canvas;

    initiate_particles();
}

function initiate_particles()
{
  for( x = 0;
       x < 1000;
       x ++ )
  {
    var new_particle = getParticle();

    new_particle.position.setX( getCanvasWidth() / 2 );
    new_particle.position.setY( getCanvasHeight() / 2 );

    particles.push( new_particle );
  }

  console.log( particles );
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
  for( x = 0;
       x < particles.length;
       x ++)
  {
    var particle = particles[x];

  }

}

function getCanvasHeight()
{
  return gcanvas_id.clientHeight;
}

function getCanvasWidth()
{
  return gcanvas_id.clientWidth;
}

function clean()
{
  gcanvas.clearRect( 0, 0,
                     1024, 700 );
}

function rasterize()
{

}


// Objects
function Vector()
{
  this.x = 0.0;
  this.y = 0.0;

  this.reset = function()
  {
    this.setX( 0.0 );
    this.setY( 0.0 );
  };

  this.getX = function()
  {
    return this.x;
  };

  this.setX = function( value )
  {
    this.x = value;
  }

  this.getY = function()
  {
    return this.y;
  };

  this.setY = function( value )
  {
    this.y = value;
  };

  this.length = function()
  {
    var a = Math.pow(this.x, 2);
    var b = Math.pow(this.y, 2);

    return Math.sqrt( (a + b) );
  };
}

function Particle()
{
  this.position = getVector();
  this.velocity = getVector();

  this.angle = 0.0;

  this.getAngle = function()
  {
    return this.angle;
  };

  this.setAngle = function( value )
  {
    this.angle = value;
  };

}

// Fetch
function getVector()
{
  return new Vector();
}

function getParticle()
{
  return new Particle();
}

main()
