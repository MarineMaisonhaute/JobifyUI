import { useEffect } from "react";
import Navbar from "../../Navbar";
import HomeArtisan from "./HomeArtisan";
import HomeUser from "./HomeUser";
import HomeArtisanAPI from "./HomeArtisanAPI";

export const checkIfArtisan = () => {
  if(localStorage.getItem("roles").split(',').includes("Artisan")){
    return true;
  }
  else{
    return false;
  }
}

function Home(props) {
    return (
      <div className="Home">
          <Navbar />
          {checkIfArtisan() ? <HomeArtisanAPI /> : <HomeUser />}
      </div>
     
    );
  }
  
  export default Home;