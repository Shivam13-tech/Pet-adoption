import React from "react";
import puppy from "../../images/puppy.jpg"

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Dog(){
    return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
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
    </div>
    )
}

export default Dog;