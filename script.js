var gcanvas_id = null;
var gcanvas = null;

var particles = [];

var maximum_amount_of_particles = 250;

function main()
{
  init();
  draw();
}

function draw_position( x, y )
{
  gcanvas.beginPath();

  gcanvas.arc( x, y, // Position
               0.5,  // Radius
               0, 2 * Math.PI );

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
  var x = null;

  for( x = 0;
       x < maximum_amount_of_particles;
       x ++ )
  {
    var new_particle = getParticle();

    new_particle.position.setX( getCanvasWidth() / 2 );
    new_particle.position.setY( getCanvasHeight() / 2 );

    new_particle.setAngle( Math.random()*365 );

    particles.push( new_particle );
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

  for( x = 0;
       x < particles.length;
       x ++ )
  {
    var particle = particles[x];

    particle.move();

    //
    if( particle.position.getY() > getCanvasHeight() )
    {
      particle.position.setY( ( particle.position.getY() - getCanvasHeight() ) );
    }

    if( particle.position.getY() < 0 )
    {
      particle.position.setY( ( particle.position.getY() + getCanvasHeight() ) );
    }

    //
    if( particle.position.getX() > getCanvasWidth() )
    {
        particle.position.setX( ( particle.position.getX() - getCanvasWidth() ) );
    }

    if( particle.position.getX() < 0 )
    {
          particle.position.setX( ( particle.position.getX() + getCanvasWidth() ) );
    }
  }


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

    draw_position( particle.position.getX(),
                   particle.position.getY() );
  }

}

main()
