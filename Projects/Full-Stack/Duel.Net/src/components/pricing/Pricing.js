import React from "react";
import axios from 'axios'
import './Pricing.scss'
import bgvid4 from '../vids/bgvid4.mp4'
import { GiCrownCoin } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const Pricing =() =>{
const history = useHistory()

const routeGpay=(coins, price)=>
{
    history.push('/gpay', {prop:{coins: coins, price:price}})
}
return(

<div>
<div className="wet">
<video autoPlay loop  muted style={{ position: "absolute",
width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-20%)", height:"100%",zIndex:-1
}}  >
  <source src={bgvid4} type="video/mp4" />
</video>
</div>
<div class="promos">  
    <div class="promo first">
        <h4>Basic</h4>
        <ul class="features">
            <li class="brief">Basic membership</li>
            <li class="price"> 200 <GiCrownCoin/> <br/> Rs. 549 </li>
            <li>One time investment</li>
            <li>Allows to host 1 tournament </li>
            <li class="buy"><button onClick={()=>{routeGpay(200, 549)}}>Buy</button></li>   
        </ul>
    </div>
    <div class="promo second">
        <h4>Plus</h4>
        <ul class="features">
            <li class="brief">Plus membership</li>
            <li class="price">500 <GiCrownCoin/><br/> Rs. 999</li>
            <li>Cheap and Efficient</li>
            <li>Allows to host 5 tournaments </li>
            <li class="buy"><button onClick={()=>{routeGpay(500, 999)}}>Buy</button></li>  
        </ul>
    </div>
    <div class="promo third scale">
        <h4>Premium</h4>
        <ul class="features">
            <li class="brief">Best deal for recurring user</li>
            <li class="price">1000 <GiCrownCoin/><br/> Rs. 1499</li>
            <li> Bang for one's buck!</li>
            <li> Allows to host 10 tournaments</li>
            <li class="buy"><button onClick={()=>{routeGpay(1000, 1499)}}>Buy</button></li> 
        </ul>
    </div>  
</div>
{/* <button href="https://dualnetwebapp.herokuapp.com/gpay">Click Me</button> */}
</div>


)



}
export default Pricing