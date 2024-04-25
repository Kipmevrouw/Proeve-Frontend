import "./Section_2.css";

const Section_2 = ({ Images_1, Images_2, Images_3, Images_4, Images_5 }) => {
  return (
    <>
      <div className="section_2_div">
        <div className="section_2_div_top">
          <h1 className="section_2_div_top_h1">Wij werken samen met</h1>
        </div>
        <div className="section_2_div_under">
          <img
            src={Images_1}
            alt="MediaCollege"
            className="section_2_div_under_image"
          ></img>
          <img
            src={Images_2}
            alt="GreenTech Campus MRA"
            className="section_2_div_under_image"
          ></img>
          <img
            src={Images_3}
            alt="HMC"
            className="section_2_div_under_image"
          ></img>
          <img
            src={Images_4}
            alt="ROC podium voor talent"
            className="section_2_div_under_image"
          ></img>
          <img
            src={Images_5}
            alt="ROC College Westpoort"
            className="section_2_div_under_image"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Section_2;
