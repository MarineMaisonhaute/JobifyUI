export const checkIfArtisan = () => {
    if (localStorage.getItem("roles").Join(',').contains("Artisan")) {
        console.log(localStorage.getItem("roles").Join(','))
        console.log(localStorage.getItem("roles").Join(',').contains("Artisan"))
        return true;
    }
    else {
        return false;
    }
}