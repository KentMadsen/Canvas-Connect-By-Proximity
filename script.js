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
       x < 100;
       x ++ )
  {
    var new_particle = getParticle();

    new_particle.position.setX( getCanvasWidth() / 2 );
    new_particle.position.setY( getCanvasHeight() / 2 );

    new_particle.setAngle(Math.random()*365);

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
                     getCanvasWidth(), getCanvasHeight() );
}

function rasterize()
{
  for( var x = 0;
           x < particles.length;
           x ++ )
  {
    var particle = particles[x];
    draw_position( particle.position.getX(),
                   particle.position.getY() );
  }

}

function toRadians( degrees )
{
  return degrees * Math.PI / 180;
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
    var a = Math.pow( this.x, 2 );
    var b = Math.pow( this.y, 2 );

    return Math.sqrt( (a + b) );
  };
}

function Particle()
{
  // Objects
  this.angle = 0.0;
  this.force = 1.0;

  this.position = getVector();
  this.velocity = getVector();

  // Operation
  this.calculateVelocity =
    function()
  {
    this.applyVelocity( Math.cos( toRadians( this.angle ) ) * this.force,
                        Math.sin( toRadians( this.angle ) ) * this.force );
  }

  // Controllers
  this.applyPosition =
    function( valueX, valueY )
  {
    this.position.setX( valueX );
    this.position.setY( valueY );
  }

  this.applyPositionX =
    function( value )
  {
    this.position.setX( value );
  }

  this.applyPositionY =
    function( value )
  {
    this.position.setY( value );
  }

  this.applyVelocity =
    function( valueX, valueY )
  {
    this.velocity.setX( valueX );
    this.velocity.setY( valueY );
  }

  this.applyVelocityX =
    function( valueX )
  {
      this.velocity.setX( valueX );
  }

  this.applyVelocityY =
    function( valueY )
  {
      this.velocity.setY( valueY );
  }

  // Accessor
  this.getAngle = function()
  {
    return this.angle;
  };

  this.setAngle = function( value )
  {
    this.angle = value % 360;
  };

  this.getForce = function()
  {
    return this.force;
  };

  this.setForce = function( value )
  {
    this.force = value;
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
