import React from "react";
// import "./homepage.css"
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";
import bgvid2 from '../vids/bgvid2.mp4'

const Homepage = ({updateUser}) => {


    return (
        <div className="homepage">
           <div className="wet">
<video autoPlay loop  muted style={{ position: "absolute",
width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-20%)", height:"100%"
}}  >
  <source src={bgvid2} type="video/mp4" />
</video>
</div>
            <div>
                <Card />
            </div>
           
        </div>
        
    )
    
}
export default Homepage