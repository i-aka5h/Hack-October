import React, { Component } from 'react'
import { useState } from 'react'
import EditDetails from './EditDetails'
import editbg from './editbg.png'
import "./EditDetails.css"


const Profile= ({updateUser})=>{ var myuser = JSON.parse(localStorage.getItem("MyUser"))


   {
    const [isOpened, setIsOpened] = useState(false);
  
    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
    }
 
        return (
            
          <div className="mcont">
          <div className="cont1">
                  
                  <img src={editbg} />
              
          </div>
            <div className="editbg">
                
                
                {!isOpened && 
               (
                <div className="rexa">
               <h1> Hi {myuser.name} </h1>
               <a className="texthover" style={{ textDecoration: 'none'}} onClick={toggle} > Want to edit acc details?</a>
               </div>
               
               )

                }
             
             <div>
             {isOpened && (<EditDetails updateUser= { updateUser}/>)}
             </div>
            </div>
            </div>
        )
    
}
}


export default Profile
 