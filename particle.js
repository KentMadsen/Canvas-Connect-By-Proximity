function getParticle()
{
  return new Particle();
}

function Particle()
{
  // Objects
  this.angle = 0.0;
  this.force = 5.25;

  this.position = getVector();
  this.velocity = getVector();

  // Operation
  this.calculateVelocity =
    function()
  {
    this.applyVelocity( Math.cos( toRadians( this.angle ) ) * this.force,
                        Math.sin( toRadians( this.angle ) ) * this.force );
  }

  this.move =
  function()
  {
    this.calculateVelocity();

    this.applyPosition( this.position.getX() + this.velocity.getX(),
                        this.position.getY() + this.velocity.getY() );
  }

  this.predict =
  function()
  {
    this.calculateVelocity();

    var v = new Vector();

    v.setX( this.position.getX() + this.velocity.getX() );
    v.setY( this.position.getY() + this.velocity.getY() );

    return v;
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
