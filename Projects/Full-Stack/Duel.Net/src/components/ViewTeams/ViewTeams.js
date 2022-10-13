import React from "react";
import { useLocation} from 'react-router';
import './ViewTeam.css'

const ViewTeams = ({updateUser}) =>{

  const location = useLocation();
  var data = location.state.prop
  console.log(data.Ts)
  var Ts=data.Ts

    return(
        <div>
            <h1 className="t"> TeamList</h1>

            <div className="sbox" >
            <ul>
            
                   {Ts.map(function(t, index){
                    return( <li key={ index } className="mind">{t.TeamName}
                    <ul>
                        <li className="julia">{t.pid1}</li>
                        <li className="julia">{t.pid2}</li>
                        <li className="julia">{t.pid3}</li>
                        <li className="julia">{t.pid4}</li>
                        <li className="julia">{t.pid5}</li>
                    </ul>
                    
                    
                    
                    </li>)
                  })}
                </ul>
                </div>
            
        </div>
    )
}

export default ViewTeams