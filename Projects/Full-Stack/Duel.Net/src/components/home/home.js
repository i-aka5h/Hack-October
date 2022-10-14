import { useHistory } from "react-router";
import React from "react";
import "./home.css"


const Home = ({updateUser}) => {
const history=useHistory()
    return(

 <div>
      
    <section className="lolman">
        <a className="titler" onClick={()=>history.push("/login")} >Dual.net</a>
        <p>for gamers, by gamers.</p>
    </section>
   


  </div>




    )
}
export default Home
