import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./headercss.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <div className="header-content">
      <img className="header-content-img" src={logo} alt="Logo" />
      {!isMainPage && (
        <nav className="header-nav">
          <Link className="nav-link" to="/">
            Anasayfa
          </Link>
          <Link className="nav-link" to="/orderpage">
            Sipariş oluştur
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
