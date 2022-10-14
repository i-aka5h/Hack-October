import React, { useState } from 'react'
import Menu from '../Navbar/Menu';
import axios from "axios"
import './team.css'




<div >
    {console.log("Created By", myuser)}
    < form >
        <div className="brack" >
            < label for="ex1" > Type of Tournament: < /label>


                <select id="ex1" name="system" value={tour.system} onChange={handleChange} className="brack" >
                    <option value="Leag" > League < /option>
                        <option value="KO" > Knock - out < /option>

                        </select>
                        < /div >
                        <br />
                        <div className="brack" >
                            <label for="ex2" > No.of Teams < /label>  <input className="inputbox" name="noft" id="ex2" type="number" min="2" max="32" value={tour.noft} onChange={handleChange} >

                                < /input> < /
div > <
                                    br />
                                <
    div className="brack" >
                                    <
    label
                                        for="ex3" > Name of the Tournament < /label> <
input className="inputbox"
                                            type="text"
                                            id="ex3"
                                            name="tourName"
                                            placeholder="Enter name"
                                            onChange={handleChange} > < /input> < /
div > <
                                                br />
                                            <
    div className="brack" >
                                                <
    label
                                                    for="ex4" > Description of the Tournament < /label> <
textarea className="inputbox"
                                                        rows="5"
                                                        name="desp"
                                                        cols="50"
                                                        id="ex4"
                                                        onChange={handleChange}
                                                        placeholder="Prize Money, Eligibility, etc." > < /textarea> < /
div > <
    /form> <
div className="buttonfix" >
                                                            <
    button className="button"
                                                                onClick={submitData} > Register < /button> < /
div > <
    /div>