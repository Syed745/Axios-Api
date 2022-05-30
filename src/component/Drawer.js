import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    const Navigate = useNavigate()
    const [first, setfirst] = useState([
        {
            title: 'Home',
            path: 'COMMENTS/*',

        },
        {
            title: 'POSTS',
            path: '/POSTS',
        },
        {
            title: 'ALBUMS',
            path: '/ALBUMS',
        },
        {
            title: 'USER',
            path: '/USER',
        },
        {
            title: 'TODOS',
            path: '/TODOS',
        },

    ])
    return (

        <Box sx={{ display: 'flex'}} >
            <CssBaseline />
            <AppBar
            color='warning'
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                       React API Axios 
                    </Typography>
                </Toolbar>
            </AppBar>
            <CssBaseline />
            <Drawer
                className='Drawer'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <div align='center' >
                    <Avatar />
                    <Divider />
                </div>
                <List  >
                    {first.map(e => (
                        <Button fullWidth onClick={() => Navigate(e.path)}>{e.title}</Button>
                    ))
                    }

                </List>
            </Drawer>
        </Box>
    );
}