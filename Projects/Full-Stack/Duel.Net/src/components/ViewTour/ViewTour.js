import React, { useState, useEffect } from 'react'
import "./ViewTour.css";
import { useLocation} from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';








const ViewTour =({updateUser}) => {

  let loadData;
  
function loadR1(data_id)
{
  axios.post("https://dualnetwebapp.herokuapp.com/brack-data", data_id).then(res => {
  // console.log(res.data)
  loadData = res.data;
    
    
})

}
  const location = useLocation();
  var data2 = location.state.prop
  loadR1({id:data2.id, onload:true})
  console.log(data2)

  useEffect(()=>{
    
     
    
  },[loadData] )

  
  function monke(){
    console.log(loadData)
    
    try{
      if((!loadData || !loadData[0].t1n) && data2.noft>8)
    {
      swal('Brackets are not generated!')
    }
     else{
      for( var i=1;i<=15;i++){
        let T1=String(i)+'.1'
        // console.log(T1)
    
        
        
         let T2=String(i)+'.2'
        //  console.log(T2)
        
    
       
  
        let s1=T1+'s'
        let s2=T2+'s'
        console.log(T1,s1,T2,s2)
       
         console.log(loadData[i-1].t1n,loadData[i-1].t2n,loadData[i-1].t1ss,loadData[i-1].t2ss) 
        document.getElementById(T1).value = loadData[i-1].t1n;
        document.getElementById(T2).value = loadData[i-1].t2n;
        document.getElementById(s1).value = loadData[i-1].t1ss;
        document.getElementById(s2).value =loadData[i-1].t2ss;
        }
      }
      
      }
      catch(err){
        swal('Brackets are not generated!')
      }
  }

  
  let round = parseInt(data2.noft)
  console.log(data2.noft)
  let r1 = {visibility: "visible"}
  let qf = {visibility: "visible"}
  let sf = {visibility: "visible"}
  
  

  if(round<16 && round>=8)
  {
    console.log("if block")
    r1.visibility = "hidden"
    
  }
  else if(round<8 && round>=4 )
  {
    r1.visibility = "hidden"
    qf.visibility = "hidden"
  }
  else if(round<4 && round>=2)
  {
    r1.visibility = "hidden"
    qf.visibility = "hidden"
    sf.visibility = "hidden"
  }

console.log(r1)



    return (
      
    
     
      
      <div class="Bracket">
        
       <div class="grp1" style={r1}>
         <h4>R1</h4>
          <div class="ss">
          <input readOnly type="text"  readOnly placeholder="TBD" class="seed"  id="1.1"
          
          
          
          /> <input readOnly type="text"  class="seedscr" id="1.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="1.2"  /> <input readOnly type="text"  class="seedscr" id="1.2s"/>
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="2.1" /> <input readOnly type="text"  class="seedscr" id="2.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="2.2"  /> <input readOnly type="text"  class="seedscr" id="2.2s"/>
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="3.1"/> <input readOnly type="text"  class="seedscr" id="3.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="3.2" /> <input readOnly type="text"  class="seedscr" id="3.2s"/>
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="4.1" /> <input readOnly type="text"  class="seedscr" id="4.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="4.2"  /> <input readOnly type="text"  class="seedscr" id="4.2s"/>
        
          </div>
                
         
         
      
      
      
      
      </div>
      <div class="grp2" style={qf}>
        <h4>Quarter Finals</h4>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed"  id="5.1"/> <input readOnly type="text"  class="seedscr" id="5.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="5.2"  /> <input readOnly type="text"  class="seedscr" id="5.2s"/>
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="6.1" /> <input readOnly type="text"  class="seedscr" id="6.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="6.2"  /> <input readOnly type="text"  class="seedscr" id="6.2s"/>
        
          </div>

        
          </div>
          <div class="grpf">
            
          <div class="ss" style={sf}>
          <h4>SEMI-final 1</h4>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="7.1" /> <input readOnly type="text"  class="seedscr" id="7.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="7.2"  /> <input readOnly type="text"  class="seedscr" id="7.2s"/>
        
          </div> 
           
          <div class="ss">
          <h4 >FINAL</h4> 
          <input readOnly type="text" readOnly placeholder="TBD" class="seed"  id="8.1"/> <input readOnly type="text"  class="seedscr" id="8.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="8.2"  /> <input readOnly type="text"  class="seedscr" id="8.2s"/>
        
          </div>
          
          <div class="ss" style={sf}>
          <h4>SEMI-final 2</h4> 
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="9.1" /> <input readOnly type="text"  class="seedscr" id="9.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="9.2"  /> <input readOnly type="text"  class="seedscr" id="9.2s"/>
        
          </div> 


        
          </div>
          <div class="grp3" style={qf}>
          <h4>Quarter Finals</h4> 
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed"  id="10.1"/> <input readOnly type="text"  class="seedscr" id="10.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="10.2"  /> <input readOnly type="text"  class="seedscr" id="10.2s"/>
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="11.1" /> <input readOnly type="text"  class="seedscr" id="11.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="11.2"  /> <input readOnly type="text"  class="seedscr" id="11.2s"/>
        
          </div>

        
          </div>
          <div class="grp4" style={r1}>
          <h4>R1</h4> 
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed"  id="12.1"/> <input readOnly type="text"  class="seedscr" id="12.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="12.2"  /> <input readOnly type="text"  class="seedscr" id="12.2s"/>
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="13.1" /> <input readOnly type="text"  class="seedscr" id="13.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="13.2"  /> <input readOnly type="text"  class="seedscr" id="13.2s"/>
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="14.1"/> <input readOnly type="text"  class="seedscr" id="14.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="14.2" /> <input readOnly type="text"  class="seedscr" id="14.2s" />
        
          </div>
          <div class="ss">
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="15.1" /> <input readOnly type="text"  class="seedscr" id="15.1s"/>
          <br/>
          <input readOnly type="text" readOnly placeholder="TBD" class="seed" id="15.2" /> <input readOnly type="text"  class="seedscr" id="15.2s"/>
        
          </div>
          
                
         
         
      
      
      
      
      </div>

                
         
         
      
      
      
      
    

      <footer><button class="bg" onClick={monke}>loadTeams</button>
      <br/>
      
      </footer>
     
      
     
      </div>

             
      


    )
  
        
    }
  
      


export default ViewTour