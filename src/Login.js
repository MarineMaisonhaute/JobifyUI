import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";


function Login(props) {

  const [formData, setFormData] = React.useState({ email: '', password: '' })

  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Authorization",
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("https://localhost:7004/auth/login", formData)
      .then((res) => {
        axios.get("https://localhost:7004/auth/current-user/roles", { headers: { Authorization: 'Bearer ' + res.data.token } })
          .then((resRoles) => {
            localStorage.setItem("roles", resRoles.data)
            localStorage.setItem("access_token", res.data.token)
            navigate("/Home")
          })
      })
      .catch(() => {
        console.log("Identifiants incorrects.");
      });
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
      // email: "marine" password: "Marine1234#"
    });
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <Box component="form" onSubmit={(e) => onSubmit(e)} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(e) => handleChange(e)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => handleChange(e)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
            </Button>
            <Grid className="forgot-container" container>
              <Grid className="forgot-container-item" item>
                <Link href="/SignUP" variant="body2" >
                  {"Vous n'avez pas de compte ? Enregistrez-vous"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;