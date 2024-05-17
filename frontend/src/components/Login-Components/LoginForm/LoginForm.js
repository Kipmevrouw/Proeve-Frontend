import { Link } from "react-router-dom";
import "./LoginForm.css";
import React, { useState } from "react";
import axios from 'axios';

const LoginForm = ({ Logo, loginImages }) => {
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [code, setCode] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.post('http://localhost:3002/login', {voornaam, achternaam, code, wachtwoord})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="LoginFormNav">
        <Link to="/">
          <img src={Logo} alt="TechCampusLogo" className="LoginFormLogo" />
        </Link>
      </div>
      <div className="LoginFormSection">
        <div className="LoginForm_form_div">
          <h1 className="LoginForm_form_h1">Leerling Login</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="LoginForm_form_input">
              <input
                type="text"
                id="voornaam"
                placeholder="Voornaam"
                value={voornaam}
                onChange={(e) => setVoornaam(e.target.value)}
                className="LoginForm_input"
              />
            </div>
            <div className="LoginForm_form_input">
              <input
                type="text"
                id="achternaam"
                placeholder="Achternaam"
                value={achternaam}
                onChange={(e) => setAchternaam(e.target.value)}
                className="LoginForm_input"
              />
            </div>
            <div className="LoginForm_form_input">
              <input
                type="text"
                id="code"
                placeholder="Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="LoginForm_input"
              />
            </div>
            <div className="LoginForm_form_input">
              <input
                type="password"
                id="wachtwoord"
                placeholder="Wachtwoord"
                value={wachtwoord}
                onChange={(e) => setWachtwoord(e.target.value)}
                className="LoginForm_input"
              />
            </div>
              <button type="submit" className="LoginForm_Button">
                Inloggen
              </button>
            <p className="LoginForm_p">
              Bent u docent? Klik dan{" "}
              <a href="" className="LoginForm_p_a">
                hier
              </a>
              !
            </p>
          </form>
        </div>
        <div className="LoginForm_formImage_div">
          <img
            src={loginImages}
            alt="Vrouw achter laptop"
            className="RightWebImage"
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
