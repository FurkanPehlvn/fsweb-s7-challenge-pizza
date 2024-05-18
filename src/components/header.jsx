import logo from "../assets/logo.svg";
import "./headercss.css";
const Header = () => {
  return (
    <div className="header-content">
      <img className="header-content-img" src={logo} alt={logo}></img>
    </div>
  );
};

export default Header;
