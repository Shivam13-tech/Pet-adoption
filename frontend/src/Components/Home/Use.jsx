import React from "react";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Use(){
    return (
        <div>
            <h1 className="steps">Follow my Lead...</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', flexWrap: 'wrap','& > :not(style)': {m: 1,width: 200,height: 110,},}}>
                <Paper elevation={7} style={{backgroundColor: '#F9E4D4'}}>
                    <Typography variant="h6" component="div" style={{display: 'flex', justifyContent: 'center', marginTop: '20%'}}>
                        Log In or Sign Up
                    </Typography>
                </Paper>
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap','& > :not(style)': {m: 1,width: 200,height: 110,},}}>
                <Paper elevation={7} style={{backgroundColor: '#F6D860'}}>
                    <Typography variant="h6" component="div" style={{display: 'flex', justifyContent: 'center', marginTop: '20%'}}>
                        Post your Dog info
                    </Typography>
                </Paper>
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap','& > :not(style)': {m: 1,width: 100,height: 110,},}}>
                <Paper elevation={7} style={{backgroundColor: '#889EAF'}}>
                    <Typography variant="h6" component="div" style={{display: 'flex', justifyContent: 'center', marginTop: '40%'}}>
                        OR
                    </Typography>
                </Paper>
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap','& > :not(style)': {m: 1,width: 220,height: 110,},}}>
                <Paper elevation={7} style={{backgroundColor: '#7EB5A6'}}>
                    <Typography variant="h6" component="div" style={{display: 'flex', justifyContent: 'center', marginTop: '18%'}}>
                        Contact a Dog Owner
                    </Typography>
                </Paper>
            </Box>
        </div>
    </div>
    )
}

export default Use;