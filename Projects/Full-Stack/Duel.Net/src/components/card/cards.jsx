import React, {Component} from "react";
import Card from "./cardUI";
import img1 from "./assets/managers.jpg"
import img2 from "./assets/pro.jpg"
import img3 from "./assets/table.png"
import { GiCrownCoin } from "react-icons/gi";
import { useHistory } from "react-router";


const Cards =()=>{
    
    
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card link="/create" imgsrc={img1} title="Create/Manage" des="Create/Manage tournaments with all the necessary tools." btn="Let's Create!"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} link="/compete" title="Compete" des="Search for available tournaments and participate in them." btn="Let's Play!"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} link="/leaderboard" title="Leaderboards" des="Look at the who's topping the leaderboards." btn="Let's See!"/>
                    </div>
                </div>
            </div>

        );
    
}

export default Cards;