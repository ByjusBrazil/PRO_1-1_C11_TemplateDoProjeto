var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Movendo o fundo


//Criando o corredor
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
// Limite esquerdo
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

// Limite direito
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // Corredor se movimentando no eixo x do mouse
  
  
  //Reiniciar fundo
  
  
  drawSprites();
}
