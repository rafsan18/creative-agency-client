import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotMatch from "./components/NotMatch/NotMatch";
import Login from "./components/Login/Login/Login";
import ServiceList from "./components/AdminDashboard/ServiceList/ServiceList";
import AddServices from "./components/AdminDashboard/AddServices/AddServices";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/adminDashboard/serviceList">
                        <ServiceList />
                    </Route>
                    <Route path="/adminDashboard/addService">
                        <AddServices />
                    </Route>
                    <Route path="/adminDashboard/makeAdmin">
                        <MakeAdmin />
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
