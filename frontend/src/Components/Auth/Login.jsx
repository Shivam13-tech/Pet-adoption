import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login(){
    return (
            <div>
                <div style={{textAlign: 'center', marginTop: '10%'}}>
                    <h1 className="steps">Welcome Hooman <br /> Login</h1>
                    <TextField id="outlined-basic" label="Enter email" variant="outlined" autoComplete='off' />
                    <div>
                        <TextField id="outlined-basic" label="Enter password" autoComplete='off' variant="outlined" style={{marginTop: '10px', marginBottom: '10px'}}/>
                    </div>
                     <Button style={{  backgroundColor: "#71C9CE"}} variant="contained">
                        Login
                    </Button>
                </div>
            </div>
    )
}

export default Login;