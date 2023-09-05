import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Chip, Divider, Grid, Stack } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import jetstar from '../Components/Assets/Images/JetStar.jpeg';
import EastIcon from '@mui/icons-material/East';


export default function CardDisplay() {

    const handleLowestDep = () =>{ 
        alert("handleLowestDep");
    }
    const handleLowestInst =() => {
        alert("handleLowestInst");
    }
    const handleDep = () => {
        alert("handleDep");
    }
    const handleSelect = () =>{
        alert("handleSelect");
    }
    
    
  return (
    <Stack direction="row" >
        <Card sx={{ maxWidth: 655 }}>
            <CardActionArea>
                <Grid container >
                    <Box>
                        <Stack direction={'row'} spacing={2} margin={3}>
                            <Chip
                                label="Lowest Deposit"
                                onClick={handleLowestDep} 
                                variant="outlined"
                                color="success"      
                                sx={{backgroundColor:"lightgray", fontWeight:"bold"}} 
                                size='small'   
                            />
                            <Chip
                                label="Lowest Installment"
                                onClick={handleLowestInst}
                                variant="outlined"
                                color="success"
                                sx={{backgroundColor:"lightgray", fontWeight:"bold"}}    
                                size='small'   
                            />
                        </Stack>
                    </Box>
                </Grid>
                <Grid container >
                    <Box>
                        <Stack direction={'row'} spacing={30} marginLeft={3}>
                            <Typography variant='subtitle' >AVV</Typography>
                            <Typography variant='caption' >1h 20m</Typography>
                            <Typography variant='subtitle' >SYD</Typography>
                        </Stack>
                        <Divider color="primary" sx={{width:400, marginLeft:20}} />                    
                        <Stack direction={'row'} spacing={24} marginLeft={3}>
                            <Typography variant='h6' >10:25am</Typography> 
                            <Typography variant='caption' color="green">NonStop</Typography>
                            <Typography variant='h6'>11:45pm</Typography> 
                        </Stack>
                    </Box>
                </Grid> <br/>
                <Grid container >
                <Box>
                        <Stack direction={'row'} spacing={30} marginLeft={3}>
                            <Typography variant='subtitle' >SYD</Typography>
                            <Typography variant='caption' >1h 30m</Typography>
                            <Typography variant='subtitle' >AVV</Typography>
                        </Stack>
                        <Divider color="primary" sx={{width:400, marginLeft:20}} />                    
                        <Stack direction={'row'} spacing={24} marginLeft={3}>
                            <Typography variant='h6' >09:15pm</Typography> 
                            <Typography variant='caption' color="green">NonStop</Typography>
                            <Typography variant='h6'>10:45pm</Typography> 
                        </Stack>
                    </Box>
                </Grid> <br/> 
                <Grid container >
                    <Box>
                        <Stack direction={'row'} spacing={45} marginLeft={3}>
                            <Typography variant='caption' color="DodgerBlue" >Flight and baggage info</Typography>
                            <Stack direction={'column'} >
                                <Stack direction={'row'} >
                                    <AttachMoneyIcon sx={{height:17}} />
                                    <Typography variant='caption' >Charges</Typography>
                                </Stack>    
                                <Stack direction={'row'} >
                                    <BlockIcon sx={{height:17}} />
                                    <Typography variant='caption' >Cancellation</Typography>
                                </Stack>
                            </Stack>                    
                        </Stack>
                    </Box>
                </Grid>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 425}}>
            <CardActionArea>
                <Grid container >                
                        <Stack direction={'column'} alignItems={"center"} spacing={1}>
                            <img src={jetstar} height="50" width="100" alt='JetStar'/>
                            <Typography variant='caption' >from</Typography>
                            <Typography variant='h6' >$3.76/UK</Typography>
                            <Typography variant='caption' >$50.26 total</Typography>
                            <Chip
                                label="Deposit: $12.56"
                                onClick={handleDep}
                                variant="outlined"
                                color="success"
                                sx={{backgroundColor:"lightgray", fontWeight:"bold"}}    
                                size='small'   
                            />
                            <Button variant="contained" endIcon={<EastIcon />} onClick={handleSelect} color="success" sx={{height:27}}>Select</Button> 
                        </Stack>                
                </Grid>
            </CardActionArea>
        </Card>
    </Stack>
  );
}