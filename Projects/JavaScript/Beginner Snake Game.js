
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>snake game</title>
   <style>
       body{
           margin: 0px;
           padding: 0px;
           display: flex;
            flex-direction: column; /* arrage items on top of the other */
            justify-content: center;
            align-items: center;
       }
       canvas{
           box-shadow: black 20px 10px 50px; /*elevate our canvas*/

       }
   </style>
</head>
<body>
    <canvas id="game" width="400" height="400"/>
    <script>
        const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
//increase snake size 
class snakePart{
constructor(x, y){
    this.x=x;
    this.y=y;
}

}

let speed=7;
let tileCount=20; 

let tileSize=canvas.clientWidth/tileCount-2;
let headX=10;
let headY=10;

// array for snake parts
const snakeParts=[];
let tailLength=2;

//initialize the speed of snake
let xvelocity=0;
let yvelocity=0;

//draw apple
let appleX=5;
let appleY=5;

//scores
let score=0;

// create game loop-to continously update screen
function drawGame(){
    changeSnakePosition();
    // game over logic
    let result=isGameOver();
    if(result){// if result is true
        return;
    }
    clearScreen();
    drawSnake();
    drawApple();
  
    checkCollision()
    drawScore();
    setTimeout(drawGame, 1000/speed);//update screen 7 times a second
}
//Game Over function
function isGameOver(){
    let gameOver=false; 
    //check whether game has started
    if(yvelocity===0 && xvelocity===0){
        return false;
    }
    if(headX<0){//if snake hits left wall
        gameOver=true;
    }
    else if(headX===tileCount){//if snake hits right wall
        gameOver=true;
    }
    else if(headY<0){//if snake hits wall at the top
        gameOver=true;
    }
    else if(headY===tileCount){//if snake hits wall at the bottom
        gameOver=true;
    }

    //stop game when snake crush to its own body

     for(let i=0; i<snakeParts.length;i++){
         let part=snakeParts[i];
         if(part.x===headX && part.y===headY){//check whether any part of snake is occupying the same space
             gameOver=true;
             break; // to break out of for loop
         }
     }
    

    //display text Game Over
    if(gameOver){
     ctx.fillStyle="white";
     ctx.font="50px verdana";
     ctx.fillText("Game Over! ", canvas.clientWidth/6.5, canvas.clientHeight/2);//position our text in center
    }

    return gameOver;// this will stop execution of drawgame method
}

// score function
function drawScore(){
ctx.fillStyle="white"// set our text color to white
ctx.font="10px verdena"//set font size to 10px of font family verdena
ctx.fillText("Score: " +score, canvas.clientWidth-50,10);// position our score at right hand corner 

}

// clear our screen
 function clearScreen(){

ctx.fillStyle= 'black'// make screen black
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)// black color start from 0px left, right to canvas width and canvas height

 }
 function drawSnake(){
    
    ctx.fillStyle="green";
    //loop through our snakeparts array
    for(let i=0;i<snakeParts.length;i++){
        //draw snake parts
        let part=snakeParts[i]
         ctx.fillRect(part.x *tileCount, part.y *tileCount, tileSize,tileSize)
    }
    //add parts to snake --through push
    snakeParts.push(new snakePart(headX,headY));//put item at the end of list next to the head
    if(snakeParts.length>tailLength){
        snakeParts.shift();//remove furthest item from  snake part if we have more than our tail size

    }
    ctx.fillStyle="orange";
    ctx.fillRect(headX* tileCount,headY* tileCount, tileSize,tileSize)


 }
 function changeSnakePosition(){
     headX=headX + xvelocity;
     headY=headY+ yvelocity;
     
 }
 function drawApple(){
     ctx.fillStyle="red";
     ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize)
 }
 // check for collision and change apple position
 function checkCollision(){
     if(appleX==headX && appleY==headY){
         appleX=Math.floor(Math.random()*tileCount);
         appleY=Math.floor(Math.random()*tileCount);
         tailLength++;
         score++; //increase our score value

     }
 }
 //add event listener to our body
 document.body.addEventListener('keydown', keyDown);

function keyDown()
//up
{
    if(event.keyCode==38){
        //prevent snake from moving in opposite direcction
        if(yvelocity==1)
        return;
        yvelocity=-1;
        xvelocity=0;
        
    }
    //down
    if(event.keyCode==40){
        if(yvelocity==-1)
        return;
        yvelocity=1;
        xvelocity=0;
    }

//left
    if(event.keyCode==37){
        if(xvelocity==1)
        return;
        yvelocity=0;
        xvelocity=-1;
    }
    //right
    if(event.keyCode==48){
        if(xvelocity==-1)
        return;
        yvelocity=0;
        xvelocity=1;
    }
}

 drawGame(); 
    </script>
</body>
</html>
