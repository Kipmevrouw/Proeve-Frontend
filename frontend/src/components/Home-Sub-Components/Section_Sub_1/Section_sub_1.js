import "./Section_sub_1.css";
import BackgroundImage from "./SubPageBackground.webp";

const Section_sub_1 = ({Images_1}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "up",
          backgroundPosition: "bottom",
        }}
      >
        <div className="section_sub_1_div">
          <h1 className="section_sub_1_h1">
            Ontdek de 7 werelden
          </h1>
          <img src={Images_1} alt="7 werelden in een spinnenweb" width={500} style={{borderRadius: "50px",}} className="section_sub_1_img"/>
        </div>
      </div>
    </>
  );
};

export default Section_sub_1;
