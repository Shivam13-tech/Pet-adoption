import React, { useState } from "react";
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Post(){
    const[data, setData] = useState({
        name: '',
        breed: '',
        about: '',
        email: '',
        location: '',
    });

    function handleChange(event){ 
        // let newEdit = {...data}
        let {name,value} = event.target
        setData(function(prevValue){
            if(name === 'Name'){
                return {
                    name: value,
                    breed: prevValue.breed,
                    about: prevValue.about,
                    email: prevValue.email,
                    location: prevValue.location
                }
            }else if(name === 'Breed'){
                return {
                    name: prevValue.name,
                    breed: value,
                    about: prevValue.about,
                    email: prevValue.email,
                    location: prevValue.location
                }
            }else if(name === 'About'){
                return {
                    name: prevValue.name,
                    breed: prevValue.breed,
                    about: value,
                    email: prevValue.email,
                    location: prevValue.location
                }
            }else if(name === 'Email'){
                return {
                    name: prevValue.name,
                    breed: prevValue.breed,
                    about: prevValue.about,
                    email: value,
                    location: prevValue.location
                }
            }else if(name === 'Location'){
                return {
                    name: prevValue.name,
                    breed: prevValue.breed,
                    about: prevValue.about,
                    email: prevValue.email,
                    location: value
                }
            }
            // return {
            //     newEdit,
            //     [name]: value  
            // }
        })
        console.log(data)
    }

    function handleClick(event){
        event.preventDefault()
        axios.post('http://127.0.0.1:8000/api/v1/pet', {
                name: data.name,
                breed: data.breed,
                about: data.about,
                email: data.email,
                location: data.location,
        }).then(function(response){
            console.log(response.data)
        }).catch(function(err){
            console.log(err)
        })
        setData(function(){
            return {
                name: '',
                breed: '',
                about: '',
                email: '',
                location: '',
            }
        })
    }
    return (
        <div>
            <div style={{textAlign: 'center', margin: '20px'}}>
             <TextField id="outlined-basic" onChange={handleChange} label="Dog Name" variant="outlined" name="Name" value={data.name} autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" onChange={handleChange} label="Dog Breed" variant="outlined" name="Breed" value={data.breed} autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" label="Dog Photo" variant="outlined"  autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" onChange={handleChange} label="About Dog" variant="outlined" name="About" value={data.about} autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" onChange={handleChange} label="Owner Email" variant="outlined" name="Email" value={data.email} autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" onChange={handleChange} label="Location" variant="outlined" name="Location" value={data.location} autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <Button onClick={handleClick} style={{  backgroundColor: "#71C9CE", margin: '10px'}} variant="contained">
                Post 
            </Button>
            </div>
        </div>
    )
}

export default Post;