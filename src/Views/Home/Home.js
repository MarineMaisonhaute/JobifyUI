import { useEffect } from "react";
import Navbar from "../../Navbar";
import { checkIfArtisan } from "../../Utils";
import HomeArtisan from "./HomeArtisan";
import HomeUser from "./HomeUser";

function Home(props) {
    return (
      <div className="Home">
          <Navbar />
          {checkIfArtisan ? <HomeArtisan /> : <HomeUser />}
      </div>
     
    );
  }
  
  export default Home;