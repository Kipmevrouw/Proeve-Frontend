import "./Footer.css";
const Footer = ({ FooterText }) => {
  return (
    <>
      <div className="footer_div">
        <p className="footer_div_p">{FooterText}</p>
      </div>
    </>
  );
};

export default Footer;
