import React, { useEffect, useState } from "react";
import puppy from "../../images/puppy.jpg"
import axios from "axios";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Dog(){
    const [dog, setDog] = useState([])
    useEffect(async function(){
        const response = await axios.get('http://127.0.0.1:8000/api/v1/pet');
        console.log(response.data.data.result)
        setDog(response.data.data.result)
    },[])

    return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {dog.map(function(item){
            return (
                <div style={{margin: '15px'}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={puppy}
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
            )   
        })}
        {/* <div style={{margin: '15px'}}>
    <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={puppy}
            alt="green iguana"
            />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Dog Name -- Dog Breed
            </Typography>
            <Typography variant="body2" color="text.secondary">
                About Dog: skjdnfkcjsdnkfcjsdnkjfnkjdsnfk<br /> jsdnflndslfnldsnfkdsjsdfsdfsdfsdfsdsd
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Location
            </Typography>
      </CardContent>
    </Card>
        </div>
        <div style={{margin: '15px'}}>
    <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={puppy}
            alt="green iguana"
            />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Dog Name -- Dog Breed
            </Typography>
            <Typography variant="body2" color="text.secondary">
                About Dog: skjdnfkcjsdnkfcjsdnkjfnkjdsnfk<br /> jsdnflndslfnldsnfkdsjsdfsdfsdfsdfsdsd
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Location
            </Typography>
      </CardContent>
    </Card>
        </div>
        <div style={{margin: '15px'}}>
    <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={puppy}
            alt="green iguana"
            />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Dog Name -- Dog Breed
            </Typography>
            <Typography variant="body2" color="text.secondary">
                About Dog: skjdnfkcjsdnkfcjsdnkjfnkjdsnfk<br /> jsdnflndslfnldsnfkdsjsdfsdfsdfsdfsdsd
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Location
            </Typography>
      </CardContent>
    </Card>
        </div>
        <div style={{margin: '15px'}}>
    <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={puppy}
            alt="green iguana"
            />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Dog Name -- Dog Breed
            </Typography>
            <Typography variant="body2" color="text.secondary">
                About Dog: skjdnfkcjsdnkfcjsdnkjfnkjdsnfk<br /> jsdnflndslfnldsnfkdsjsdfsdfsdfsdfsdsd
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner Location
            </Typography>
      </CardContent>
    </Card>
        </div> */}
    </div>
    )
}

export default Dog;