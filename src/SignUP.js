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
import AutocompleteSelectBox from './Components/AutocompleteSelectBox'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();


export default function SignUp() {

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://localhost:7004/auth/signup", formData).then(_ => {
      navigate("/login")
    })
  };

  const navigate = useNavigate();

  const [formData, setFormData] = React.useState(
    {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      role: "",
      phoneNumber: "",
      password: "",
      dateOfBirth: "",
      description: "",
      adresse: "",
      postalCode: "",
      city: "",
      country: "",
      latitude: 0,
      longitude: 0,
      jobId: 0
    }
  )

  const handleSelectionChange = (value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      jobId: value.jobId
    }))
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

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
            Enregistrement
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  id="lastName"
                  label="Nom"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  id="email"
                  label="Adresse Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <AutocompleteSelectBox onSelectionChange={(value) => handleSelectionChange(value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="userName"
                  label="Nom d'utilisateur"
                  id="userName"
                  autoComplete="new-userName"
                />
              </Grid>
              <Grid item xs={12}>
                <label>Choisissez votre rôle :</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="Artisan"
                      display="Artisan"
                      name="role"
                      onChange={handleChange}
                    />
                    Artisan
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="Customer"
                      display="Client"
                      name="role"
                      onChange={handleChange}
                    />
                    Client
                  </label>
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  name="phoneNumber"
                  label="Téléphone"
                  id="phoneNumber"
                  autoComplete="new-phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="date"
                  required
                  fullWidth
                  onChange={handleChange}
                  name="dateOfBirth"
                  label="Date de naissance"
                  id="dateOfBirth"
                  autoComplete="new-dateOfBirth"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="description"
                  label="Description"
                  id="description"
                  autoComplete="new-description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="adresse"
                  label="Adresse"
                  id="adresse"
                  autoComplete="new-adresse"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="postalCode"
                  label="Code postal"
                  id="postalCode"
                  autoComplete="new-postalCode"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="city"
                  label="Ville"
                  id="city"
                  autoComplete="new-city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="country"
                  label="Pays"
                  id="country"
                  autoComplete="new-country"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crée mon compte
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Vous avez déjà un compte ? Connectez-vous
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}