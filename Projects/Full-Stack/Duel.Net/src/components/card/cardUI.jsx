import React from "react";
import "./card.css";
import { useHistory } from "react-router";
const Card = props => {
    const history = useHistory()
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top"></img>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.title}
                </h4>
                <p className="card-text text-secondary">
                    {props.des}
                </p>
                <a onClick={()=>{history.push(props.link)}} className="btn btn-outline-success" >{props.btn}</a>
            </div>
        </div>
    )
}

export default Card;