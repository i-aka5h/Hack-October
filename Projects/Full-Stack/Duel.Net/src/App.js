import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Games from './components/CreateTourney/Games';
import Bracket from './components/CreateBrackets/Bracket';
import Compete from './components/Compete/Compete';
import up from './layeredwaves.svg'
import Regt from './components/Regt/Regt';
import ManageTour from './components/ManageTour/ManageTour';
import Megt from './components/Megt/Megt';
import Profile from './components/Profile/Profile';
import Menu from './components/Navbar/Menu';
import Pricing from './components/pricing/Pricing';
import bgvid from './bgvid.mp4'
import ViewTour from './components/ViewTour/ViewTour';
import VueT from './components/VueT/VueT';
import Leaderboard from './components/Leaderboards/Leaderboard'
import ViewTeams from './components/ViewTeams/ViewTeams';
import Gpay from './components/pricing/Gpay'
import PaySuccess from './components/pricing/PaySuccess'
import AboutUs from './components/aboutus/abus'
import Home from './components/home/Home'

function App() {

  const [ user, setLoginUser] = useState({})
  
  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }


  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  return (
    <div>
    
    <img className="nope" src={up} />
    <div className="bottom">
    <div className="spacer">
     
    <div className="App">



    <Router>
      <Switch>
           <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login updateUser={updateUser}/>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
   
            <div className="mainsc ">

            {
              user && user._id ? <Menu  updateUser= { updateUser} /> : null
            }
                  
    
      
        
          <Route exact path="/home">
            {
              user && user._id ? <Homepage  updateUser= { updateUser} /> : <Login updateUser={updateUser} />
            }
            </Route>
        

          <Route path="/create">
          {
              user && user._id ? <Games  updateUser= { updateUser} /> : <Login updateUser={updateUser} />
            }
          </Route>

          <Route path="/create-brack-valo">
          {
              user && user._id ? <Bracket updateUser= {updateUser} game="Valorant"   /> : <Login updateUser={updateUser} />
            }
          </Route>

          <Route path="/compete">
          {
              user && user._id ? <Compete updateUser= { updateUser}   /> : <Login updateUser={updateUser} />
            }
          </Route>
          <Route path="/Regt">
          {
              user && user._id ? <Regt updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
          </Route>
          <Route path="/manage">
          {
              user && user._id ? <ManageTour updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
          </Route>
          <Route path="/tour-status">
          {
              user && user._id ? <ManageTour updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
          </Route>
          <Route path ="/manage-t">
          {
               user && user._id ? <Megt updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }

            </Route>
            <Route path ="/manage-g">
          {
               user && user._id ? <VueT updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }

            </Route>

            <Route path="/custom-t">
            {
               user && user._id ? <ManageTour updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
            </Route>
            <Route path="/custom-tites">
            {
               user && user._id ? <ViewTour updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
            </Route>

            <Route path="/profile">
            {
               user && user._id ? <Profile updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
            </Route>

            
            <Route path="/pricing">
            {
               user && user._id ? <Pricing updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
            </Route>
            <Route path="/leaderboard">
            {
               user && user._id ? <Leaderboard updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
            </Route>

            <Route path="/teams">
            {
               user && user._id ? <ViewTeams updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
            </Route>
            <Route path="/gpay">
            {
               user && user._id ? <Gpay updateUser= { updateUser}  /> : <Login updateUser={updateUser} />
            }
            </Route>
            <Route path="/success">
            {
               user && user._id ? user.paystatus ? < PaySuccess updateUser= { updateUser}   /> : <Homepage  updateUser= { updateUser} /> : <Login updateUser={updateUser} />
            }
            </Route>

            <Route path="/aboutus">
            {
               user && user._id ? <AboutUs updateUser= { updateUser}  /> : <Login updateUser={updateUser}  />
            }
            </Route>
            </div>


        </Switch>
      </Router>

        
    </div>
    </div>
    <img src={up} />
    </div>
    </div> 
    
    
  );
}

export default App;
