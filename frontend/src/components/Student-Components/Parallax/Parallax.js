import "./Parallax.css";
import { Link } from "react-router-dom";

const Parallax = ({ Logo }) => {
  return (
    <>
      <div className="parallax">
        <h1 className="parallax_h1">Welkom 12345</h1>
      </div>
      <div className="content">
        <nav className="content_nav">
          <Link to="/Studentpage">
            <img src={Logo} alt="TechCampusLogo" className="navLogo"></img>
          </Link>
        </nav>
        <div className="kaart">
          <h2>Mijn Kaart</h2>
        </div>
      </div>
    </>
  );
};

export default Parallax;
