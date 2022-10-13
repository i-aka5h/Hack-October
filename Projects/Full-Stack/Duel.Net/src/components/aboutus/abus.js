import React from "react";
import "./abus.css"
import sydney from "../imgs/sydney.PNG"
import aldrich from "../imgs/aldrich.png"
import parth from "../imgs/parth.png"
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const AboutUs = ({updateUser}) => {

    return(

 <div className="containerdis">
    <ul>
        <li>
<div className="rat">
     <div className="col-md-1">
                     <img className="userpic" src={sydney} />
     </div>
    <div className="abdesc">
    <div className="nandr">
        <h1>Front End </h1><pre> - Sydney Gomes</pre>
    </div>
    <p>Student at Fr. Conceicao Rodrigues Institute of Technology </p>
    <p>Data Security enthusiast</p>
    <p>Languages: C++,  C,  Python,  React</p>
    <p className="words">"Working on the project was fun since it was a project related to something we like, which is gaming. Learned a lot about JS and React, also how things work at the backend"</p>
    <ul className ="contentinlist">
    <li><a href="https://www.linkedin.com/in/sydney-gomes-994a9b18b/"><GrLinkedin/> </a> </li>    
    <li><a href="https://github.com/aerodeval"><FaGithub/></a></li>
    <li><a href="https://www.instagram.com/thatsydney/?hl=en"><GrInstagram/></a></li>
    </ul>
    </div>
    
</div>
</li>
<li>
<div className="rat3">
  
    <div className="abdescc">
    <div className="nandr">
        <h1>Full Stack </h1><pre> - Parth Phalke</pre>
    </div>
    <p>Student at Fr. Conceicao Rodrigues Institute of Technology </p>
    <p>Data Science and Web Dev enthusiast</p>
    <p>Languages: Java,  C,  Python,  MERN</p>
    <p className="wordsc">"Gaming is one of my hobbies and working on a project which involved gaming was even more fun. Learnt a lot about web development using the MERN stack."</p>
    <ul className ="contentinlist">
    <li><a href="https://www.linkedin.com/in/parth-phalke-5855091a3/"><GrLinkedin/> </a> </li>    
    <li><a href="https://github.com/Parth-ops"><FaGithub/></a></li>
    <li><a href="https://www.instagram.com/parthphalke/?hl=en"><GrInstagram/></a></li>
    </ul>
    </div>
    <div className="col-md-1">
                     <img className="userpic" src={parth} />
     </div>
    
    
</div>
</li>

<li>
<div className="rat2">
    <div className="col-md-1">
                     <img className="userpic" src={aldrich} />
     </div>
    <div className="abdesc">
    <div className="nandr">
        <h1>Full Stack </h1><pre> - Aldrich D'souza</pre>
    </div>
    <p>Student at Fr. Conceicao Rodrigues Institute of Technology </p>
    <p>Data Science and Web Dev enthusiast</p>
    <p>Languages: C++,  C,  Python,  MERN</p>
    <p className="words">"Me along with my teammates learnt a lot about MERN stack through this project"</p>
    <ul className ="contentinlist">
    <li><a href="https://www.linkedin.com/in/aldrich-dsouza-2b67741ba/"><GrLinkedin/> </a> </li>    
    <li><a href="https://github.com/aldrich2002"><FaGithub/></a></li>
    <li><a href="https://www.instagram.com/lrich_xo/?hl=en"><GrInstagram/></a></li>
    </ul>
    </div>
</div>
</li>
</ul>
  </div>




    )
}
export default AboutUs
