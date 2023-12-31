import React, { Component } from "react";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import {Route,Redirect, Switch} from "react-router-dom";
class App extends Component {
    render() {
        return (
            <main className="container">
                <NavBar/>
                <div className="content">
                    <Switch>
                        <Route path='/register' component={RegisterForm}/>
                        <Route path='/login' component={LoginForm}/>
                        <Route path='/movies/:id' component={MovieForm}/>
                        <Route path='/movies' component={Movies}/>
                        <Route path='/customers' component={Customers}/>
                        <Route path='/rentals' component={Rentals}/>
                        <Route path='/not-found' component={NotFound}/>
                        <Redirect from='/' exact to='/movies'/>
                        <Redirect to='/not-found'/>
                    </Switch>
                </div>
            </main>
        );
    }
}

export default App;