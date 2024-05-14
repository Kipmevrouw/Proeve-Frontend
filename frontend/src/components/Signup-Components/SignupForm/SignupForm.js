import { Link } from "react-router-dom";
import "./SignupForm.css";
import React, { useState, useEffect } from "react";

const SignupForm = ({ Logo, SignupImages }) => {
  const [gebruiker, setGebruiker] = useState({
    voornaam: "",
    achternaam: "",
    school: "",
    code: "",
    uitslag1: "",
    uitslag2: "",
    password: "",
    repeatPassword: "",
    checkboxVinkje: false,
  });

  useEffect(() => {
    const fetchGebruiker = async () => {
      try {
        const response = await fetch('/api/gebruiker');
        const data = await response.json();
        setGebruiker(data);
      } catch (error) {
        console.error('Fout bij ophalen van gebruiker:', error);
      }
    };

    fetchGebruiker();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGebruiker({ ...gebruiker, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!gebruiker.code.startsWith("tyt")) {
      alert("Ongeldige code. Vraag jouw code aan de docent!");
      return;
    }
    e.preventDefault();
    if (gebruiker.password !== gebruiker.repeatPassword) {
      alert("Wachtwoorden komen niet overeen");
      return;
    }
  };
  return (
    <>
      <div className="SignupFormNav">
        <Link to="/">
          <img src={Logo} alt="TechCampusLogo" className="SignupFormLogo" />
        </Link>
      </div>
      <div className="SignupFormSection">
        <div className="SignupForm_formImage_div">
          <img
            src={SignupImages}
            alt="Vrouw achter laptop"
            className="LeftWebImage"
          />
        </div>
        <div className="SignupForm_form_div">
          <h1 className="SignupForm_form_h1">Inschrijven workshops</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="SignupForm_form_input">
              <input
                type="text"
                name="voornaam"
                placeholder="Voornaam"
                value={gebruiker.voornaam}
                onChange={handleChange}
                className="SignupForm_input"
                required
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="text"
                name="achternaam"
                placeholder="Achternaam"
                value={gebruiker.achternaam}
                onChange={handleChange}
                className="SignupForm_input"
                required
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="text"
                name="school"
                placeholder="School"
                value={gebruiker.school}
                onChange={handleChange}
                className="SignupForm_input"
                required
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="text"
                name="code"
                placeholder="Code (Ontvangen van je docent)"
                value={gebruiker.code}
                onChange={handleChange}
                className="SignupForm_input"
                required
              />
            </div>
            <div className="SignupForm_form_input">
              <select
                name="uitslag1"
                value={gebruiker.uitslag1}
                onChange={handleChange}
                className="SignupForm_input"
                required
              >
                <option value="" className="SignupForm_input_dropdown">
                  - Selecteer jouw uitslag -
                </option>
                <option value="De-vernieuwer">De vernieuwer</option>
                <option value="De-maatschappelijke-toepasser">
                  De maatschappelijke toepasser
                </option>
                <option value="De-ontdekker">De ontdekker</option>
                <option value="De-creatieve-maker">De creatieve maker</option>
                <option value="De-doener">De doener</option>
              </select>
            </div>
            <div className="SignupForm_form_input">
              <select
                name="uitslag2"
                value={gebruiker.uitslag2}
                onChange={handleChange}
                className="SignupForm_input"
                required
              >
                <option value="" className="SignupForm_input_dropdown">
                  - Selecteer jouw uitslag -
                </option>
                <option value="De-vernieuwer">De vernieuwer</option>
                <option value="De-maatschappelijke-toepasser">
                  De maatschappelijke toepasser
                </option>
                <option value="De-ontdekker">De ontdekker</option>
                <option value="De-creatieve-maker">De creatieve maker</option>
                <option value="De-doener">De doener</option>
              </select>
            </div>
            <div className="SignupForm_form_input">
              <input
                type="password"
                name="password"
                placeholder="Wachtwoord"
                value={gebruiker.password}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="password"
                name="repeatPassword"
                placeholder="Herhaal wachtwoord"
                value={gebruiker.repeatPassword}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_vinkje">
              <input
                type="checkbox"
                id="agreement"
                name="checkbox"
                value={gebruiker.checkboxVinkje}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreement" className="SignupForm_form_agreetext">
                Ik ga akkoord met de{" "}
                <a href="/voorwaarden">algemene voorwaarden</a>.
              </label>
            </div>
            <button type="submit" className="SignupForm_Button">
              Registreren
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
