import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login(){
    let navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function handleChange(event){
        const {name,value} = event.target;
        setData(function(prevValue){
            if(name === 'Email'){
                return {
                    email: value,
                    password: prevValue.password
                }
            }else if(name === 'Password'){
                return {
                    email: prevValue.email,
                    password: value
                }
            }
        })
    }
    
    function handleSubmit(event){
        axios.post('http://127.0.0.1:8000/api/v1/userlogin', {
            email: data.email,
            password: data.password
        }).then(function(response){
            console.log(response);
            localStorage.setItem("Token" , response.data.data.token);
            navigate('/')
            window.location.reload(false);
        }).catch(function(err){
            console.log(err);
        })
        setData(function(prevValue){
            return {
                email: '',
                password: ''
            }
        })
        
    }
    
        return (
            <div>
                <div style={{textAlign: 'center', marginTop: '10%'}}>
                    <h1 className="steps">Welcome Hooman <br /> Login</h1>
                    <TextField id="outlined-basic" onChange={handleChange} name='Email' value={data.email} label="Enter email" variant="outlined" autoComplete='off' />
                    <div>
                        <TextField id="outlined-basic" onChange={handleChange} name='Password' value={data.password} label="Enter password" autoComplete='off' variant="outlined" style={{marginTop: '10px', marginBottom: '10px'}}/>
                    </div>
                     <Button onClick={handleSubmit} style={{  backgroundColor: "#71C9CE"}} variant="contained">
                        Login
                    </Button>
                </div>
            </div>
    )}

export default Login;