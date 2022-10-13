import React, {useState} from "react";
import "./login.css"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import bgvid from '../vids/bgvid.mp4'
import swal from "sweetalert";


const Login = ({ updateUser}) => {

    const history = useHistory()
    const [showpass, setshow] = useState(false)
    const togglePass = () => setshow(!showpass);
    const showPassword = {
        passStat: showpass ? 'text' : 'password',
      };
    
    const [ user, setUser] = useState({
       
        email: "",
        password: "",
        
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://dualnetwebapp.herokuapp.com/login", user)
        .then(res => {
            if(res.data.message==='Login Successful'){
            swal(res.data.message,{
                icon:'success'
            })
        }else{
            swal(res.data.message,{
                icon:'error'
            })

        }
            updateUser(res.data.user)
            history.push("/home")
        })
    }


    return (
      
        <div className="mcontainer">
          
        <div className="wet">
    <video autoPlay loop  muted style={{ position: "absolute",
    width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-16%)", height:"55%"
    }}  >
      <source src={bgvid} type="video/mp4" />
    </video>
    </div>
    <div className="login">
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your E-mail"></input>
                <div className="hot">
                <input className="inputb" type="password" type={showPassword.passStat} name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input> 
            <div className="iconcont">
                    < MdVisibility className="icon" onMouseOver={togglePass}  onMouseOut={togglePass}/>
            </div>
                </div>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/register")}>Register</div>
    
    </div>
            </div>
    )
}
export default Login