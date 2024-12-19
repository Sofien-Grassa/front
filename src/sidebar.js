import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import QuizIcon from '@mui/icons-material/Quiz'; // Icône pour "Tests"
import WorkIcon from '@mui/icons-material/Work'; // Icône pour "Jobs"
import Navbar from './Navbar_profile';

const drawerWidth = 240;

const Sidebar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#6200ea' }}>
                <Navbar />
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {/* Lien vers la page CV */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/cv')} sx={{ '&:hover': { backgroundColor: '#e0e7ff' } }}>
                                <ListItemIcon>
                                    <InboxIcon sx={{ color: '#1B1833' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="CV"
                                    sx={{ fontWeight: 'bold', marginLeft: '-15px' }}
                                />
                            </ListItemButton>
                        </ListItem>

                        {/* Lien vers la page Tests */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/tests')} sx={{ '&:hover': { backgroundColor: '#e0e7ff' } }}>
                                <ListItemIcon>
                                    <QuizIcon sx={{ color: '#1B1833' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Tests"
                                    sx={{ fontWeight: 'bold', marginLeft: '-15px' }}
                                />
                            </ListItemButton>
                        </ListItem>

                        {/* Lien vers la page Jobs */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/jobs')} sx={{ '&:hover': { backgroundColor: '#e0e7ff' } }}>
                                <ListItemIcon>
                                    <WorkIcon sx={{ color: '#1B1833' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Jobs"
                                    sx={{ fontWeight: 'bold', marginLeft: '-15px' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Divider />
                </Box>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
