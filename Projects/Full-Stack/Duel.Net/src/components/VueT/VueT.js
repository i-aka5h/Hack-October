import React, { useState, useEffect } from 'react';
import Menu from '../Navbar/Menu';
import axios from 'axios';
import ManageTiles from '../ManageTiles/ManageTiles';
import ViewTiles from '../ViewTiles/ViewTiles';
import { GiCoinsPile } from 'react-icons/gi';






    


 

  


const VueT = ({updateUser}) => {
    
    var myuser = JSON.parse(localStorage.getItem("MyUser"))
    console.log(JSON.stringify({username: myuser.name})) 

    const [gg, setgg] = useState([])
    
    function GetReq()
    {
    axios.get("https://dualnetwebapp.herokuapp.com/compete").then(res => setgg(res.data))

    }
    
   useEffect(() =>{
    GetReq()

   }, []) 


    
    
        
        
    

        return (
            <div>
                <div>
                    <Menu updateUser={updateUser}/>
                </div>
                <div>
                
                {
                    gg.map((data, i) => <ViewTiles cb={data.created_by}  noft={data.noft}  key={i}  sys={data.system} tn={data.tourName} Ts={data.teams} id={data._id} />)
                }

                </div>
            </div>
        )

            }
    


export default VueT