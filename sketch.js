// making the variables
// (bob is the dog's name)
var dog;
var dogImg;
var happyDogImg;
var database;
var foodS;
var foodStock;

function preload()
{
  // preloading the images
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);

  // assigning firebase values to database
  database = firebase.database();
  //fetching foodStock from database
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  foodStock.set(20);

  //creating the dog sprites
  dog = createSprite(250,250,30,70);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {
background("green");
if(foodS!==undefined)
{
   textSize(20);
   fill(225);
   text("Press the up arrow to feed bob",50,50);
   text("Food left =>" + foodS, 150,150);

//feeding bob
 if(keyWentDown(UP_ARROW))
 {
    writeStock(foodS);
    dog.addImage(happyDogImg);
 }

 if(keyWentUp(UP_ARROW))
 {
    dog.addImage(dogImg);   
 }

 if(foodS === 0)
 {
    foodS = 20;
 }

}

  drawSprites();
}

function writeStock(x)
{
// kidof making it show the bottle thingies
  if(x<=0)
  {
    x = 0;
  }
  else
  {
    x = x-1
  }
  database.ref("/").update({
    Food:x
  });
}

 function readStock(data)
 {
   foodS = data.val();
 }
















//========================================================================================================
// *************************************************************************************
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// I feel like an artist

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// *************************************************************************************
//========================================================================================================
