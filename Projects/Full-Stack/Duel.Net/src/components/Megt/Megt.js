import React, { useState, useEffect } from 'react';
import Menu from '../Navbar/Menu';
import axios from 'axios';
import ManageTiles from '../ManageTiles/ManageTiles';






    


 

  


const Megt = ({updateUser}) => {
    
    var myuser = JSON.parse(localStorage.getItem("MyUser"))
    console.log(JSON.stringify({username: myuser.name})) 

    const [gg, setgg] = useState([])
    function GetReq()
    {
    axios.post("https://dualnetwebapp.herokuapp.com/manage-t", myuser).then(res => setgg(res.data))
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
                    gg.map((data, i) => <ManageTiles cb={data.created_by}  noft={data.noft}  key={i}  sys={data.system} tn={data.tourName} Ts={data.teams} id={data._id} />)
                }

                </div>
            </div>
        )

            }
    


export default Megt