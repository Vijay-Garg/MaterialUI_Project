import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Stack } from '@mui/material';
import CardDisplay from '../CardDisplay';
import ToggleButtonDisplay from '../ToggleButtonDisplay';
import jetstarLogo from '../SideNavBar/../Assets/Images/JetStar.jpeg'


const drawerWidth = 240;

export default function SideNavBar() {

const [mobileOpen, setMobileOpen] = React.useState(false);

const handleIconDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
};

const handleCheckBoxChange = (event) => {
    alert(event.target.value);
};

const drawer = (
    <div style={{backgroundColor:"#F0FFFF"}} >
      <Toolbar />
        <FormControl sx={{ m: 1 }} variant="standard" >
            <FormLabel>Airlines</FormLabel>
            <Divider color='darkgray'/>
            <FormGroup sx={{fontSize: '0.9rem'}}>
                <Typography variant='subtitle' color="primary" >Clear All</Typography>
                <FormControlLabel  
                    control={
                    <Checkbox onChange={handleCheckBoxChange} name="jetStar" size="small"/>
                    }            
                    value="JetStar"
                    label="JetStar"
                    sx={{fontSize:'0.6'}}                    
                />
                <FormControlLabel
                    control={
                    <Checkbox onChange={handleCheckBoxChange} name="Regional Express" size="small"/>
                    }
                    value="Regional Express"
                    label="Regional Express"
                    sx={{fontSize:'0.6'}}
                />
                <FormControlLabel
                    control={
                    <Checkbox onChange={handleCheckBoxChange} name="Virgin Australia" size="small"/>
                    }
                    value="Virgin Australia"
                    label="Virgin Australia"
                    sx={{fontSize:'0.6'}}
                />
                <FormControlLabel
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Airline Combinations" size="small"/>
                    }
                    value="Airline Combinations"
                    label="Airline Combinations"
                    sx={{fontSize:'0.6'}}
                />
                <Typography variant='subtitle' color="primary">Stops</Typography>
                <FormControlLabel            
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Non Stop" size="small" />
                    }       
                    value="Non Stop"     
                    label="Non Stop"
                    sx={{fontSize:'0.6'}}
                />
                <FormControlLabel
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="1 Stop" size="small"/>
                    }
                    value="1 Stop"
                    label="1 Stop"
                />
                <FormControlLabel
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="2+ Stop" size="small"/>
                    }
                    value="2+ Stop"
                    label="2+ Stop"
                />
                <Typography variant='subtitle' color="primary">Departure Time</Typography>
                <FormControlLabel            
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Morning (05:00 - 11:59)" size="small"/>
                    }       
                    value="Morning (05:00 - 11:59)"     
                    label="Morning (05:00 - 11:59)"
                />
                <FormControlLabel            
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Afternoon (12:00 - 17:59)" size="small"/>
                    }       
                    value="Afternoon (12:00 - 17:59)"     
                    label="Afternoon (12:00 - 17:59)"
                />
                <FormControlLabel            
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Evening (18:00 - 11:59)" size="small"/>
                    }       
                    value="Evening (18:00 - 11:59)"     
                    label="Evening (18:00 - 11:59)"
                />
                <Typography variant='subtitle' color="primary">Return Time</Typography>
                <FormControlLabel            
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Early Morning (00:00 - 04:59)" size="small"/>
                    }       
                    value="Early Morning (00:00 - 04:59)"     
                    label="Early Morning (00:00 - 04:59)"
                />
                <FormControlLabel            
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Morning (05:00 - 11:59)" size="small"/>
                    }       
                    value="Morning (05:00 - 11:59)"     
                    label="Morning (05:00 - 11:59)"
                />
                <FormControlLabel            
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="AFternoon (12:00 - 17:59)" size="small"/>
                    }       
                    value="AFternoon (12:00 - 17:59)"     
                    label="AFternoon (12:00 - 17:59)"
                />
                <FormControlLabel     
                sx={{fontSize:'0.6'}}       
                    control={
                    <Checkbox  onChange={handleCheckBoxChange} name="Evening (18:00 - 11:59)" size="small"/>
                    }       
                    value="Evening (18:00 - 11:59)"     
                    label="Evening (18:00 - 11:59)"
                />
            </FormGroup>        
        </FormControl>
        
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    </div>
  );

return (
    <Box backgroundColor="#F0FFFF">
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor:"white"
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleIconDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                    <img src={jetstarLogo} height="50" width="100" alt='JetStar'/> 
                    <ToggleButtonDisplay />
                    <Typography variant="caption" noWrap component="div" sx={{color:"black"}}> How it Works </Typography>
                    <Typography variant="caption" noWrap component="div" sx={{color:"black"}}> FAQ </Typography>
                </Stack>
                </Toolbar>
            </AppBar>
            <Box        
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}        
                aria-label="mailbox folders"                        
            >                
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Stack direction={'column'} spacing={1}>
                <Stack direction={'row'} spacing={70}>
                    <Typography variant='caption'>256 results</Typography>
                    <Typography variant='caption'>Sort By: Best</Typography>
                </Stack>
                    <CardDisplay/>
                    <CardDisplay/>
                    <CardDisplay/>
                </Stack>
            </Box>
        </Box>
    </Box>
  );
}
