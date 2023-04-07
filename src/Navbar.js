import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Base64 } from 'js-base64';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function isTokenExpired(token) {
    if(token === null){
        return true;
    }
    try {
      // Décoder le token pour récupérer les données de payload
      const payload = JSON.parse(Base64.decode(token.split(".")[1]));
      // Récupérer la propriété 'exp' qui contient un timestamp
      const expiresAt = payload.exp;
      // Transformer le timestamp en date
      const expirationDate = new Date(expiresAt * 1000);
      // Vérifier si la date d'expiration est supérieure à l'heure actuelle
      return expirationDate < new Date();
    } catch (err) {
      console.error(err);
      return true;
    }
  }

export default function Navbar() {

    const [isConnected, setIsConnected] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsConnected(!isTokenExpired(localStorage.getItem("access_token")));
    }, [location]);

    const login = () => {
        navigate("/login");
    }

    const logout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="app-navbar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            className = "navbar-icon"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jobify
          </Typography>
          {!isConnected && <Button color="inherit" onClick={() => login()}>Login</Button>}
          {isConnected && <Button color="inherit" onClick={() => logout()}>Déconnexion</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}