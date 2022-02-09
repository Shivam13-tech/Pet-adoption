import React from "react";
import Navbar from "./Navbar";
// import Navbar2 from "./Navbar2";
// import Body from './Home/Body';
// import Use from "./Home/Use";
import Login from './Auth/Login'
import Signup from "./Auth/Signup";
function App(){
    return (
        <div>
            <Navbar />
            {/* <Navbar2 />
            <Body />
            <Use /> */}
            {/* <Login /> */}
            <Signup />
        </div>
    )
}

export default App;