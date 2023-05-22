import { useEffect } from "react";
import Navbar from "../../Navbar";
import HomeArtisan from "./HomeArtisan";
import HomeUser from "./HomeUser";
import HomeArtisanAPI from "./HomeArtisanAPI";
import HomeUserAPI from "./HomeUserAPI";

export const checkIfArtisan = () => {
  if (localStorage.getItem("roles").split(',').includes("Artisan")) {
    return true;
  }
  else {
    return false;
  }
}

function Home(props) {
  return (
    <div className="Home">
      <Navbar />
      {checkIfArtisan() ? <HomeArtisanAPI /> : <HomeUserAPI />}
    </div>

  );
}

export default Home;