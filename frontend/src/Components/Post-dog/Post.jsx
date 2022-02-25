import React, { useState } from "react";
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Post(){
    const[data, setData] = useState({
        name: '',
        breed: '',
        photo: null,
        about: '',
        email: '',
        location: '',
    });

    function handleChange(event){ 
        // console.log(event.target.files[0].name)
        let {name,value} = event.target
        setData(function(prevValue){
            if(name === 'Name'){
                return {
                    name: value,
                    breed: prevValue.breed,
                    photo: prevValue.photo,
                    about: prevValue.about,
                    email: prevValue.email,
                    location: prevValue.location
                }
            }else if(name === 'Breed'){
                return {
                    name: prevValue.name,
                    breed: value,
                    photo: prevValue.photo,
                    about: prevValue.about,
                    email: prevValue.email,
                    location: prevValue.location
                }
            }else if(name === 'photo'){
                return {
                    name: prevValue.name,
                    breed: prevValue.breed,
                    photo: event.target.files[0],
                    about: prevValue.about,
                    email: prevValue.email,
                    location: prevValue.location
                }
            }else if(name === 'About'){
                return {
                    name: prevValue.name,
                    breed: prevValue.breed,
                    photo: prevValue.photo,
                    about: value,
                    email: prevValue.email,
                    location: prevValue.location
                }
            }else if(name === 'Email'){
                return {
                    name: prevValue.name,
                    breed: prevValue.breed,
                    photo: prevValue.photo,
                    about: prevValue.about,
                    email: value,
                    location: prevValue.location
                }
            }else if(name === 'Location'){
                return {
                    name: prevValue.name,
                    breed: prevValue.breed,
                    photo: prevValue.photo,
                    about: prevValue.about,
                    email: prevValue.email,
                    location: value
                }
            }
        })
        // console.log(data)
    }
    
    // function handleClick(event){
    //     event.preventDefault()
    //     const formData = new FormData();
    //     formData.append('photo', data.photo);
    //     axios.post('http://127.0.0.1:8000/api/v1/pet', {
    //             name: data.name,
    //             breed: data.breed,
    //             photo: formData,
    //             about: data.about,
    //             email: data.email,
    //             location: data.location,
    //     }).then(function(response){
    //         console.log(response)
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    //     setData(function(){
    //         return {
    //             name: '',
    //             breed: '',
    //             photo: null,
    //             about: '',
    //             email: '',
    //             location: '',
    //         }
    //     })
    // }

    function handleClick(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('photo', data.photo);
        formData.append('Name', data.name);
        formData.append('Breed', data.breed);
        formData.append('About', data.about);
        formData.append('Email', data.email);
        formData.append('Location', data.location);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     }
        // }
        axios.post('http://127.0.0.1:8000/api/v1/pet',formData)
        .then(function(response){
            console.log(response)
        }).catch(function(err){
            console.log(err)
        })
        setData(function(){
            return {
                name: '',
                breed: '',
                photo: null,
                about: '',
                email: '',
                location: '',
            }
        })
    }
    return (
        <div>
            <form style={{textAlign: 'center', margin: '20px'}}>
             <TextField id="outlined-basic" onChange={handleChange} label="Dog Name" variant="outlined" name="Name" value={data.name} autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" onChange={handleChange} label="Dog Breed" variant="outlined" name="Breed" value={data.breed} autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" onChange={handleChange} type="file" accept=".pnj, .jpg, .jpeg"  label="Dog Photo" variant="outlined"  name="photo" autoComplete='off' style={{margin: '10px'}}/>
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
            </form>
        </div>
    )
}

export default Post;