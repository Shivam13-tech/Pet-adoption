import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Post(){
    return (
        <div>
            <div style={{textAlign: 'center', margin: '20px'}}>
             <TextField id="outlined-basic" label="Dog Name" variant="outlined"  autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" label="Dog Breed" variant="outlined" autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" label="Dog Photo" variant="outlined" autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" label="About Dog" variant="outlined" autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" label="Owner Email" variant="outlined" autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <TextField id="outlined-basic" label="Location" variant="outlined" autoComplete='off' style={{margin: '10px'}}/>
             <br />
             <Button style={{  backgroundColor: "#71C9CE", margin: '10px'}} variant="contained">
                Post 
            </Button>
            </div>
        </div>
    )
}

export default Post;