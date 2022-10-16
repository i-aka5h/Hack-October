import React, { useState,useEffect, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewTiles.css"
import val from './valo.jpg';
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";


 const ViewTiles = (props,{updateUser})=>{
       
       var dd={
               id:props.id,
               hh:props.tn
        }

       const history = useHistory()
       const DelTour=()=>{

              if (window.confirm('confirm to delete tournament '+ props.tn)){
                     axios.post("https://dualnetwebapp.herokuapp.com/deltour",dd).then(res => {
                            swal(res.data.message)
                            
                        })


                   
    
                     }
              else{
                     
             }
              return('hi')
       }

       const updateTour=()=>{
              let teams;
              axios.post("https://dualnetwebapp.herokuapp.com/custom-t",props).then(res => {
                     
                     
                     teams = res.data
                     history.push('/custom-tites',{prop: props, teamarr: teams})
                     
                 })
              
              
    
          
            } 
       const sendData=()=>{
              history.push('/teams', {prop: props})
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
                <button className="but1" onClick={updateTour}> Brackets </button> <button className="but2"  onClick={sendData}> Teams </button>
         </div>


        
 </div>

        </div>
        </div>
    )



 };
 export default ViewTiles; 