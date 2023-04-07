import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';


function Login(props) {

    const [formData, setFormData] = useState({email: '', password: ''})

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        axios.post("https://localhost:7004/auth/login", formData)
        .then( (res) => {
            localStorage.setItem("access_token", res.data.token)
            navigate("/Home")
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

    return (
    <div className="Login" >
    <div className='bold-line'></div>
        <div className='container'>
            <div className='window'>
                <div className='overlay'></div>
                <div className='content'>
                    <div className='welcome'>Connexion</div>
                    <div className='subtitle'>Veuillez créer un compte avant de vous connecter</div>
                    <div className='input-fields'>
                        <form onSubmit= {(event) => onSubmit(event)}>
                            <input onChange={(event) => handleChange(event)} placeholder='Email' name="email" className='input-line full-width'></input>
                            <input onChange={(event) => handleChange(event)} type='password' name="password" placeholder='Password' className='input-line full-width'></input>
                            <div className='spacing'>ou continuer avec <span className='highlight'>Facebook</span></div>
                            <div><button className='ghost-round full-width' type="submit">Se connecter</button></div>
                         <div><button className='ghost-round full-width'>Créer un compte</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Login;