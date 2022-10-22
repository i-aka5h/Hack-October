//challenge 1


function ageindays(){
   
   var birthyear=prompt('What is your year of birth..........My Friend?');
   var ageinday=(2022-birthyear)*365;
   var h1= document.createElement('h1');
   var textanswer = document.createTextNode(' You are '+ageinday+' days old.');
   h1.setAttribute('id','ageindays');
   h1.appendChild(textanswer);
   document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('flex-box-result').innerHTML="";
   // document.getElementById('ageindays').remove();
}

// Challenge 2

function Catgen(){
    
    var image = document.createElement('img');
    var div=document.getElementById('flex-cat-generator');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.setAttribute('id','catgens')
    div.appendChild(image);

}

function res(){
    document.getElementById('flex-cat-generator').innerHTML="";
    //document.getElementById('catgens').remove();
    
}

// Challenge 3

function rpsgame(yourchoice){
    bot=rpsbotchoice();
    var botchoice=numtochoice(bot);
    message = winner(yourchoice.id,botchoice);
    remove(yourchoice.id,botchoice,message);    
}

function remove(yourid,botid,msg){
   
   var imagedata={
       'rock':document.getElementById('rock').src,
       'paper':document.getElementById('paper').src,
       'scissor':document.getElementById('scissor').src,

   }
   var human = document.createElement('div');
   var bot = document.createElement('div');
   var messages=document.createElement('div');


   human.innerHTML="<img src="+imagedata[yourid]+" height=150 width=150 style='box-shadow: 8px 10px 58px rgb(37, 58, 233, 1);'>";
   bot.innerHTML="<img src="+imagedata[botid]+"width=150 height=150 style='box-shadow: 8px 10px 58px rgb(243, 38, 24, 1);'>";
   messages.innerHTML="<h2 style='color:"+msg['color']+"; padding:30px; font-size:60px;'>"+msg['win']+"</h2>";

   document.getElementById('flex-box-rps-div').appendChild(human);
   document.getElementById('flex-box-rps-div').appendChild(messages);
   document.getElementById('flex-box-rps-div').appendChild(bot);
   

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();


}  

function rpsbotchoice(){
    return Math.floor(Math.random() * 3);
}

function numtochoice(botnum){
       return ["rock","paper","scissor"][botnum];
}

function winner(yourchoce,botchoce){
   var database={
    'rock':{'rock':0.5,'paper':1,'scissor':0},
    'paper':{'rock':0,'paper':0.5,'scissor':1},
    'scissor':{'rock':1,'paper':0,'scissor':0.5},}
   var win;
   switch(database[yourchoce][botchoce]){
    case 0.5: return {win:"Draw",
              color:"yellow"};
              break;
    case 1: return {win:"You Lost!",
              color:"red"};   
               break;    
    case 0:return {win:"Hurray, You Won!!!",
            color:"green"};

               
   }      
   
}

// Challenge 4

let allbutt=document.getElementsByTagName('button');

let copyallbutt= [];
for(let i=0; i<allbutt.length; i++){
    copyallbutt.push(allbutt[i].classList[1]);
    

    
}

function changecolor(buttontype){
    if(buttontype.value==='red'){
        redbutton(); 
    }

    else if(buttontype.value==='green'){
        greenbutton();
    }
    else if(buttontype.value==='random'){
        randombutton();
    }
    else if(buttontype.value==='reset'){
        resetbutton(copyallbutt);
    } 
}

function redbutton(){
    for(let i=0; i<allbutt.length; i++){
        allbutt[i].classList.remove(allbutt[i].classList[1]);
        allbutt[i].classList.add('btn-danger'); }
    }
function greenbutton(){
        for(let i=0; i<allbutt.length; i++){
            allbutt[i].classList.remove(allbutt[i].classList[1]);
            allbutt[i].classList.add('btn-success');}
        }

function randombutton(){
    let button=['btn-primary','btn-danger','btn-warning','btn-success'];
            for(let i=0; i<allbutt.length; i++){              
                random=button[Math.floor(Math.random()*3)];
                allbutt[i].classList.remove(allbutt[i].classList[1]);
                allbutt[i].classList.add(random);
            }

}

function resetbutton(copiedbutton){
    for(let i=0; i<allbutt.length; i++){
        allbutt[i].classList.remove(allbutt[i].classList[1]);
        allbutt[i].classList.add(copiedbutton[i]);
    }
}



// Challenge 5 

let blackjackgame={
    'you':{'scorespan':'#yourbox-result','div':'#yourbox', 'score':0},
    'dealer':{'scorespan':'#dealerbox-result','div':'#dealerbox', 'score':0},
    'card':['2','3','4','5','6','7','8','9','10','A','K','Q','J'],
    'cardnumber':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'K':10,'Q':10,'J':10},
}
const you=blackjackgame['you'];
const dealer=blackjackgame['dealer']; 
const hitsound = new Audio('static/sounds/whoosh.mp3');
const awwsound = new Audio('static/sounds/aww.mp3');
const cash = new Audio('static/sounds/cash.mp3');


document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackstand);

function blackjackhit(){
   showcards(you); 
}

function showcards(player){
    if(player['score']<21){
        var image = document.createElement('img');
        let randomimage  = randomcard(player);
        resultscore(player,randomimage);
        showscore(player);
        image.src=`static/images/${randomimage}.png`;
        document.querySelector(player['div']).appendChild(image);
        hitsound.play();  }
    
}

function randomcard(player){
    random = Math.floor(Math.random() * 13);
    return blackjackgame['card'][random];
}

function resultscore(player,imagerand){
    if(imagerand=="A"){
        if(player['score'] + blackjackgame['cardnumber'][imagerand][1] <=21){
            player['score'] += blackjackgame['cardnumber'][imagerand][1]; }
        else{
            player['score'] += blackjackgame['cardnumber'][imagerand][0]; }}
    else{
        player['score'] += blackjackgame['cardnumber'][imagerand];
    }

}


function showscore(player){
    if(player['score']<=21){
      document.querySelector(player['scorespan']).textContent=player['score']; }
    
    else{
        document.querySelector(player['scorespan']).textContent="Bust !!";
        document.querySelector(player['scorespan']).style.color="red";
    }
}


function blackjackdeal(){
   let yourimage = document.querySelector(you['div']).querySelectorAll('img');
   let dealerimage = document.querySelector(dealer['div']).querySelectorAll('img');
   
   for(i=0; i<yourimage.length; i++){
       yourimage[i].remove();}
   for(i=0; i<dealerimage.length; i++){
    dealerimage[i].remove();}

   you['score']= 0;
   dealer['score']=0;
   document.querySelector('#dashboard').textContent="Let's Play";
   document.querySelector(you['scorespan']).style.color="#ffffff";
   document.querySelector(dealer['scorespan']).style.color="#ffffff";
   showscore(you);
   showscore(dealer);
}


function blackjackstand(){
    
      for(i=1; i<23; i=i+dealer['score']){

          showcards(dealer);}
          computerwinner();
}


let scorewin={
  "win":0, "loss":0, "draw":0,
}

function computerwinner(){
    let winner; let win; let loss; let draw;
        if(you['score']<21){
            if(you['score']>dealer['score'] || dealer['score']>21){
               winner="Congrats, You're the winner";
               cash.play();
               console.log(winner);
               console.log(win);
               document.querySelector('#Wins').textContent=++scorewin['win'];

            }
            else if(you['score']<dealer['score']){
               winner="Ohh no! You lost";
               awwsound.play();
               console.log(winner);
               console.log(loss);
               document.querySelector('#Losses').textContent=++scorewin['loss'];
            }
            else if(you['score']===dealer['score']){
               winner="You drew!!";
               console.log(draw);
               document.querySelector('#Draws').textContent=++scorewin['draw'];

            }}
        else if(you['score']>21 && dealer['score']<=21){
           winner="Ohh no! You lost";
           awwsound.play();
           console.log(winner);
           console.log(loss);
           document.querySelector('#Losses').textContent=++scorewin['loss'];

        }
        else if(you['score']>21 && dealer['score']>21){
            winner="You drew";
            console.log(draw);
            document.querySelector('#Draws').textContent=++scorewin['draw'];
        }
  
  document.querySelector('#dashboard').textContent=winner;
}

