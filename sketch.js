var movingrec, fixedrec
function setup() {
  createCanvas(800,400);
  movingrec=createSprite(200,100,100,100)
fixedrec=createSprite(200,300,100,100)
movingrec.shapeColor='gold'
fixedrec.shapeColor='gold'
}

function draw() {
  background(255,255,255);  
  movingrec.x=mouseX
  movingrec.y=mouseY
  if(movingrec.x-fixedrec.x<movingrec.width/2+fixedrec.width/2&&
    fixedrec.x-movingrec.x<movingrec.width/2+fixedrec.width/2&&
    movingrec.y-fixedrec.y<movingrec.height/2+fixedrec.height/2&&
    fixedrec.y-movingrec.y<movingrec.height/2+fixedrec.height/2)
    {
      movingrec.shapeColor='silver'
fixedrec.shapeColor='silver'
    }
    else{
      movingrec.shapeColor='gold'
fixedrec.shapeColor='gold'
    }
  drawSprites();
}