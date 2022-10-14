import React, { useState, useEffect } from 'react';
import Menu from '../Navbar/Menu';
import axios from 'axios';
import "./Compete.css"

import Tiles from "../tiles/Tiles";






 

  


const Compete = ({updateUser}) => {

    const [gg, setgg] = useState([])

    function GetReq()
    {
    axios.get("https://dualnetwebapp.herokuapp.com/compete").then(res => setgg(res.data))

    }
    
    useEffect(() =>{
        GetReq()
    
       }, [])

    
    
        
        
    

        return (
            <div className="hesllo">
                <div>
                    <Menu updateUser={updateUser}/>
                </div>
                <div>
                
                {
                   
                
                    gg.map((data, i) => <Tiles cb={data.created_by} noft={data.noft}  key={i}  sys={data.system} tn={data.tourName} Ts={data.teams} id={data._id} />)
                }

                </div>
            </div>
        )

            }
    


export default Compete
