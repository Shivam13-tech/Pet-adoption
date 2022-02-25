import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import {actionCreators} from "../State/index";
//

import Navbar from "./Home/Navbar";
import Body from './Home/Body';
import Use from "./Home/Use";
import Login from './Auth/Login'
import Signup from "./Auth/Signup";
import Post from './Post-dog/Post';
import Dog from './See-dog/Dog';



function App(){

    // const state = useSelector(function(state){
    //     return (
    //         state.account
    //     )
    // })
    // console.log(state);
    // const dispatch = useDispatch();
    
    // const {depositMoney} = bindActionCreators( actionCreators, dispatch);
    // console.log(AC);
    return (
        <div>
            {/* <button onClick={function(){
                depositMoney(1000)
            }}></button> */}
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={
                <div>
                    <Body />
                    <Use />
                </div>
                } />
                <Route path="/Login" exact element={<Login />} />
                <Route path="/Signup" exact element={<Signup />} />
                <Route path="/Post-Dog" exact element={<Post />} />
                <Route path="/Dog-World" exact element={<Dog />} />
            </Routes>
        </Router>
        </div>
    )
}

export default App;