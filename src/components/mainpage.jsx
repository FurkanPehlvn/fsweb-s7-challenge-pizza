import { useHistory } from "react-router-dom";
import logo from "../assets/home-banner.png";
import "./mainpage.css";

const HomePage = () => {
  let history = useHistory();

  function handleSubmit() {
    history.push("/orderpage");
  }
  return (
    <div className="homepage-content">
      <img className="homepage-content-img" src={logo} alt="Home Banner" />
      <div className="homepage-content-overlay">
        <h1 className="homepage-content-text">
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <button className="homepage-content-btn" onClick={handleSubmit}>
          ACIKTIM
        </button>
      </div>
    </div>
  );
};

export default HomePage;
