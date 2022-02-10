import React from "react";
import { Link } from "react-router-dom";
import dog from "../../images/dog.png"
import Button from '@mui/material/Button';

function Body(){
    return (
        <div className="container">
                <img src={dog} alt="Dog image" height='550' width='1300' style={{margin: '25px'}}/>
            <div class="centered">
                <p className="bodyInfo">Hemlo hooman Welcome to my world <br /> Let's meet my friend's</p>
                <Link to="/Dog-World" style={{ textDecoration: 'none', color: '#1A1A40'}}>
                    <Button style={{ borderRadius: 35, backgroundColor: "#71C9CE", padding: "15px 30px", fontSize: "18px"}} variant="contained" color="inherit"> Enter Dog World</Button>
                </Link>
             </div>
        </div>
    )
}

export default Body;