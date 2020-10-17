import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotMatch from "./components/NotMatch/NotMatch";
import Login from "./components/Login/Login/Login";
import ServiceList from "./components/AdminDashboard/ServiceList/ServiceList";
import AddServices from "./components/AdminDashboard/AddServices/AddServices";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";
import OrderForm from "./components/ClientDashboard/OrderForm/OrderForm";
import OrderedList from "./components/ClientDashboard/OrderedList/OrderedList";
import ReviewForm from "./components/ClientDashboard/ReviewForm/ReviewForm";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

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
                    <PrivateRoute path="/adminDashboard/serviceList">
                        <ServiceList />
                    </PrivateRoute>
                    <PrivateRoute path="/adminDashboard/addService">
                        <AddServices />
                    </PrivateRoute>
                    <PrivateRoute path="/adminDashboard/makeAdmin">
                        <MakeAdmin />
                    </PrivateRoute>
                    <PrivateRoute path="/clientDashboard/orderFormFor/:serviceId">
                        <OrderForm />
                    </PrivateRoute>
                    <PrivateRoute path="/clientDashboard/orderedList">
                        <OrderedList />
                    </PrivateRoute>
                    <PrivateRoute path="/clientDashboard/reviewForm">
                        <ReviewForm />
                    </PrivateRoute>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
