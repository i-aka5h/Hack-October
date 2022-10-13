import React, { useState } from 'react';
import { useLocation} from 'react-router';
import { useHistory } from 'react-router';
import axios from 'axios';
import Menu from '../Navbar/Menu';
import regtbg from './regtbg.png'
import "./regt.css"
import swal from 'sweetalert';


const Regt=({updateUser}) =>{

    const history = useHistory()
    const location = useLocation();
    console.log(location.state)
    const [ setT, setTT] = useState({
        TeamName: "",
        pid1: "",
        pid2: "",
        pid3: "",
        pid4: "",
        pid5: "",
        cid :location.state.id,
        noft:location.state.noft
        
    })
     const handleChange= e =>{
        const {name, value} = e.target
        setTT({
            ...setT,
            [name]: value
        })
        console.log(setT)


     }
     const Hansub=(e)=>{
        e.preventDefault();
         const{TeamName,pid1,pid2,pid3,pid4,pid5,cid }=setT
        if(TeamName&&pid1&&pid2&&pid3&&pid4&&pid5){
            axios.post("https://dualnetwebapp.herokuapp.com/Regt", setT)
            .then(res => {
                swal(res.data.message, {
                    icon:"success"
                })
               setTimeout(()=>{ history.push('/home')}, 2000)
            })
        
             
        }
        else{
            swal("empty")
        }


     }
     
    return(

         
        <div className="mcont">
        <div className="cont1">
                
                <img className="rbg" src={regtbg} />
            
        </div>
        <div className="cont3">
            <div>
                <Menu updateUser={updateUser}/>
            </div>
        
        <form>
        <br/>
        
        <div className="Team">
            <label for="tn">Please enter your Team name</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input className="inputbox" type="text" id="TeamName" name="TeamName" placeholder="Enter Your Team Name" onChange={handleChange}></input>
        </div>
        <br/>
        <div className="Team">
            <label for="pid1">Player 1</label>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} <input className="inputbox" type="text" id="pid1" name="pid1" placeholder=" Username  #abcd" onChange={handleChange}></input>
        </div>
        <div className="Team">
            <label for="pid2">Player 2</label>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} <input className="inputbox" type="text" id="pid2" name="pid2" placeholder=" Username  #abcd" onChange={handleChange}></input>
        </div>
        <div className="Team">
            <label for="pid3">Player 3</label>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} <input className="inputbox" type="text" id="pid3" name="pid3" placeholder=" Username  #abcd" onChange={handleChange}></input>
        </div>
        <div className="Team">
            <label for="pid4">Player 4</label>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} <input className="inputbox" type="text" id="pid4" name="pid4" placeholder=" Username  #abcd" onChange={handleChange}></input>
        </div>

        <div className="Team">
            <label for="pid5">Player 5</label>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} <input className="inputbox" type="text" id="pid5" name="pid5" placeholder=" Username  #abcd" onChange={handleChange}></input>
        </div>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<button onClick={Hansub}> Register </button>
    </form>
    </div>
    </div>

    )


}
export default Regt