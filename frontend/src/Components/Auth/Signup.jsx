import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup(){
    return (
            <div>
                <div style={{textAlign: 'center', marginTop: '10%'}}>
                    <h1 className="steps">Welcome Hooman <br /> Sign Up</h1>
                    <TextField id="outlined-basic" label="Enter email" variant="outlined" />
                    <div>
                        <TextField id="outlined-basic" label="Enter password" variant="outlined" style={{marginTop: '10px', marginBottom: '10px'}}/>
                    </div>
                     <Button style={{  backgroundColor: "#71C9CE"}} variant="contained">
                        Sign Up
                    </Button>
                </div>
            </div>
    )
}

export default Signup;