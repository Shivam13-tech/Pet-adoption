import React, { useEffect, useState } from "react";
import axios from "axios";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Dog(){
    const [dog, setDog] = useState({
        info: []
    })
    useEffect(async function(){
        const response = await axios.get('http://127.0.0.1:8000/api/v1/pet', {
            headers:{
                'x-auth-token': localStorage.getItem('Token')
            }
        });
        // const base64String = btoa(String.fromCharCode(...new Uint8Array(response.data.data.result[0].img.data.data)));
        setDog(function(prevValue){
            return {
                info: response.data.data.result
            }
        })
        // function random(){
        //     dog.info.map(function(item){
        //         console.log(btoa(String.fromCharCode(...new Uint8Array(item.img.data.data))));
        //     })
        // }
        // random()
    },[])
    
    return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {dog.info.map(function(item){ 
             return ( 
                <div style={{margin: '15px'}} id={item.id}> 
                                        <div>
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={`data:image/png;base64, ${btoa(String.fromCharCode(...new Uint8Array(item.img.data.data)))}`}     //Converts buffer data to base64 so it can be used as image
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {item.name}--{item.breed}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.about}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.email}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.location}
                                                    </Typography>
                                                </CardContent>
                                             </Card>
                                        </div>
                 </div> 
                   )  
               })}
    </div>
       )
    }


export default Dog;