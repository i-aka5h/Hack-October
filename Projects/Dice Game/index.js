var rn1 = Math.floor(Math.random()*6) + 1 ;
var ele = document.querySelector('.img1') ;
var str = "images/dice"+rn1+".png" ;

ele.setAttribute('src' , str) ;

 ele = document.querySelector('.img2') ;
var rn2 = Math.floor(Math.random()*6) + 1 ;
 str = "images/dice"+rn2+".png" ;

ele.setAttribute('src' , str) ;

ele = document.querySelector('h1') ;
if(rn1 == rn2)
ele.innerHTML = "Draw!" ;
else if(rn1 > rn2)
  ele.innerHTML = 'Player 1 Wins!' ;
  else ele.innerHTML = "Player 2 Wins!" ;
