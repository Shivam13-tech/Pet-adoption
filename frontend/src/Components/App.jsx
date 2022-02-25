import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


import Navbar from "./Home/Navbar";
import Body from './Home/Body';
import Use from "./Home/Use";
import Login from './Auth/Login'
import Signup from "./Auth/Signup";
import Post from './Post-dog/Post';
import Dog from './See-dog/Dog';



function App(){
    return (
        <div>
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