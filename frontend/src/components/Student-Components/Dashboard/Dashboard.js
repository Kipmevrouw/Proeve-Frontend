import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = ({ Logo }) => {
  return (
    <>
      <div className="dashboard_Background">
        <div className="dashboard_Nav">
          <Link to="/Studentpage">
            <img
              src={Logo}
              alt="TechCampusLogo"
              className="dashboard_Logo"
            ></img>
          </Link>
        </div>
        <div className="dashboard_Setup">
          <h1 className="dashboard_h1">Jouw workshops:</h1>
          <div>
            
          </div>
        </div>
        <div className="dashboard_Nav">
          <Link to="/">
            <button type="button" className="dashboard_Uitloggen">
              Uitloggen
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
