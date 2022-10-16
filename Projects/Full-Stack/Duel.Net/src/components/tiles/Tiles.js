import React, { useState,useEffect, } from "react";
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";
import "./Tiles.css"
import val from './valo.jpg';
import { useHistory } from "react-router-dom";


 const Tiles = (props,{updateUser})=>{
       const history = useHistory()
       

       const updateT=()=>{
              
              history.push('/Regt',props)
              
          
          
          
            }     


     

     

 

       // useEffect(() => {
       //        setd(JSON.parse(localStorage.getItem("tdata")))
       //      }, [])
       
        
    return(
           <div>
                  <div>
                  </div>
        <div className="cerd ">
              
   
 <div className="bracket"  >
            <div className="tourimg">
           <img className="timage" src={val} />
           </div>
         <div className="text">
               <p>
                Tournament Name:{props.tn}
                </p>
                <p>
                Created by:{props.cb}
                </p>
                <p>
                No. of teams:{props.noft}
               </p>
               <p>
                System:{props.sys}
               </p>
                <p>
                  Slots Available:{props.noft - props.Ts.length}
                </p>  
                {!(props.noft - props.Ts.length===0) && (<button  onClick={updateT}  >Register</button>)}   
               
         </div>


        
 </div>

        </div>
        </div>
    )



 };
 export default Tiles; 