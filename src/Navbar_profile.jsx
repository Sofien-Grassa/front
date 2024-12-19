import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout"; // Import de l'icône Logout
import { useNavigate } from "react-router-dom"; // Pour rediriger après déconnexion


export default function PrimarySearchAppBar() {
  
    const navigate = useNavigate();

    

   

    

    const handleLogout = () => {
        // Déconnexion : Supprimez les données utilisateur et redirigez
        localStorage.removeItem("userEmail"); // Supprimer l'email stocké
        navigate("/login"); // Rediriger vers la page de connexion
    };

   


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            cursor: "pointer", 
                        }}
                        onClick={() => navigate('/')}
                    >
                        SA Opportunities
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                       
                       
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="logout"
                            color="inherit"
                            onClick={handleLogout}
                        >
                            <LogoutIcon /> {/* Icône de déconnexion */}
                        </IconButton>
                    </Box>
                   
                </Toolbar>
            </AppBar>
            
        </Box>
    );
}
