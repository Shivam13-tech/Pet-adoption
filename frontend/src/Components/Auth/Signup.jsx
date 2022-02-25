import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup(){
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleChange(event){
        const {value, name} = event.target
        setData(function(prevValue){
            if(name === 'Name'){
                return {
                    name: value,
                    email: prevValue.email,
                    password: prevValue.password
                }
            }else if(name === 'Email'){
                return {
                    name: prevValue.name,
                    email: value,
                    password: prevValue.password
                }
            }else if(name === 'Password'){
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    password: value
                }
            }
        })
    }

    function handleSubmit(event){
        axios.post('http://127.0.0.1:8000/api/v1/user', {
                name: data.name,
                email: data.email,
                password: data.password
        }).then(function(response){
            console.log(response);
            console.log(response.data.data.token);
            localStorage.setItem("Token" , response.data.data.token);
            navigate('/')
            window.location.reload(false);
        }).catch(function(err){
            alert('Something went wrong !! Try again')
        })
        setData(function(prevValue){
            return {
                name: '',
                email: '',
                password: ''
            }
        })
        event.preventDefault()
    }
    return (
            <div>
                <div style={{textAlign: 'center', marginTop: '10%'}}>
                    <h1 className="steps">Welcome Hooman <br /> Sign Up</h1>
                    <div>
                        <TextField id="outlined-basic" onChange={handleChange} name='Name' value={data.name} label="Enter Name" variant="outlined" autoComplete='off' style={{marginTop: '10px', marginBottom: '10px'}}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" onChange={handleChange} name='Email' value={data.email} label="Enter Email" variant="outlined" autoComplete='off' style={{marginTop: '10px', marginBottom: '10px'}}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" onChange={handleChange} name='Password' value={data.password} label="Enter Password" autoComplete='off' variant="outlined" style={{marginTop: '10px', marginBottom: '10px'}}/>
                    </div>
                     <Button onClick={handleSubmit} style={{  backgroundColor: "#71C9CE"}} variant="contained">
                        Sign Up
                    </Button>
                </div>
            </div>
    )
}

export default Signup;