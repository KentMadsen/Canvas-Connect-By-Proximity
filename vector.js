function getVector()
{
  return new Vector();
}

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

  this.addition = function( vector2 )
  {
    var newVector = getVector();

    newVector.setX( ( vector1.getX() + vector2.getX() ) );
    newVector.setY( ( vector1.getY() + vector2.getY() ) );

  };

  this.scale = function( scalar )
  {
    this.setX( scalar * this.getX() );
    this.setY( scalar * this.getY() );
  };
}
