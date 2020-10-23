function isTouching(a, b){

    if (a.x - b.x < b.width/2 + a.width/2 &&
      b.x - a.x < b.width/2 + a.width/2 &&
      b.y - a.y < b.height/2 + a.height/2 &&
      a.y - b.y < b.height/2 + a.height/2){
      return true;
     // r1.shapeColor = "yellow";
      //r2.shapeColor = "yellow";
     }else{
      //r1.shapeColor = "green";
      //r2.shapeColor = "green";
      return false;
     }
  
  }
  
  function bounceOff(a, b){
  
    if (a.x - b.x < b.width/2 + a.width/2 &&
      b.x - a.x < b.width/2 + a.width/2){
      b.velocityX = b.velocityX * (-1)
      }
  
  }