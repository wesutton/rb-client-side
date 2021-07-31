import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Home from './content/home/Home'
import Scores from './content/scores/Scores'
import Stats from './content/stats/Stats'
import Account from './content/account/Account'
import './AuthNavbar.scss'


function AuthNavbar(props) {
    return (
        <nav>
            <div className = "home-navbar">
                <ul className = "nav-link-styling">
                    <li><Link to = "/home"> Home </Link>   </li>
                    <li><Link to = "/scores"> Scores </Link></li>
                    <li><Link to = "/stats"> Stats </Link></li>
                    <li><Link to = "/account"> Account </Link></li>
                </ul> 
            </div> 
            <div>
                <Switch>
                    <Route exact path ="/home"><Home /></Route>
                    <Route exact path ="/scores"><Scores token = {props.token} /></Route>
                    <Route exact path ="/stats"><Stats /></Route>
                    <Route exact path ="/account"><Account /></Route>
                </Switch>
            </div>
        </nav>
    )
}

export default AuthNavbar;
