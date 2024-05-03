import "./Section_1.css";
import { Link } from "react-router-dom";
import BackgroundImage from "./HomePageBackground.jpg";

const Section_1 = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="section_1_div">
          <h1 className="section_1_h1">
            Leer, experimenteer, <br></br>
            en verander de toekomst.
          </h1>
          <Link to="/workshops">
            <button type="button" className="Section_1_Button">
              Ontdek de workshops hier!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section_1;
