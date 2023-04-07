import { Base64 } from "js-base64";

export const checkIfArtisan = () => {
    // Décoder le token pour récupérer les données de payload
    const token = localStorage.getItem("access_token");
    const payload = JSON.parse(Base64.decode(token.split(".")[1]));
    // Récupérer la propriété 'exp' qui contient un timestamp
    const roles = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    if(roles == "Artisan"){
        return true;
    }
    return false;
}

export const ARTISAN = "Artisan";
export const USER = "User";