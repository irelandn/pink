import React from 'react'
import HomePage from "./HomePage"
import ProfilePage from "./ProfilePage"
import ReportPage from "./ReportPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Header extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/report" className="nav-link">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <HomePage/>
                                </Route>
                                <Route path="/profile">
                                    <ProfilePage />
                                </Route>
                                <Route path="/report">
                                    <ReportPage/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Header;