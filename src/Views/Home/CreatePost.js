import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AiOutlineForm } from "react-icons/ai";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Copyright } from '@mui/icons-material';
import AutocompleteSelectBox from '../../Components/AutocompleteSelectBox';


const theme = createTheme();

export default function CreatePost() {

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://localhost:7004/post", formData, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }).then(_ => {
            navigate("/home");
        });
    };

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState(
        {
            name: "",
            description: "",
            photoURL: "",
            jobId: 0,
            price: 0,
            finishDate: "",
            department: ""
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
                        <AiOutlineForm />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Nouveau besoin
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nom du post"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="description"
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
                                    name="price"
                                    label="Prix"
                                    id="price"
                                    autoComplete="price"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="date"
                                    required
                                    fullWidth
                                    onChange={handleChange}
                                    name="finishDate"
                                    label="Date de fin"
                                    id="finishDate"
                                    autoComplete="new-finishDate"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    fullWidth
                                    name="department"
                                    label="Departement"
                                    id="department"
                                    autoComplete="new-department"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Crée mon post
                        </Button>
                        <div className="cancel-button-wrapper">
                            <Link to="/Home">
                                <Button className="cancel-button-wrapper" variant="contained">Annuler</Button>
                            </Link>
                        </div>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}