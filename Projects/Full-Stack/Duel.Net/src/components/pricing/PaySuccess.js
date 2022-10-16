import React from 'react';
import { useLocation } from "react-router";
import axios from 'axios';
import bgvid5 from '../vids/bgvid5.mp4'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import "./pays.css"

const PaySuccess = ({updateUser})=>{

    const history = useHistory()
    let myuser = JSON.parse(localStorage.getItem("MyUser"))
    const [isLoaded, setLoaded] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    useEffect(()=>{
        paymentUpdate()
    }, [])

    function paymentUpdate()
    {
        axios.post("https://dualnetwebapp.herokuapp.com/success", myuser).then(
            res=>{
                    if(res.data.message === "failed")
                    {
                        setLoaded(true)
                    }
                    else{
                        setLoaded(true)
                        setSuccess(true)
                    }
            }
        )
    }

    if(isLoaded && isSuccess)
    {
    return(

        <div className="mcontainer">
          
        <div className="wet">
    <video autoPlay muted style={{ position: "absolute",
    width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-16%)", height:"55%"
    }}  >
      <source src={bgvid5} type="video/mp4" />
    </video>
    </div>

    <div className="bthome">
<button  className="record" onClick={()=>{ history.push("/home"); myuser.paystatus = false; updateUser(myuser)}}>Back to Home page</button>
</div>      
        </div>
    )
    }


    else if(isLoaded && !isSuccess)
    {
        return(
            <div>
                Oops! We are facing some issues :(
            </div>
        )
    }

    else
    {
        return(
            <div>
                Processing
            </div>
        )
    }
}

export default PaySuccess