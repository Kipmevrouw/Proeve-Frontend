import { Link } from "react-router-dom";
import "./LoginForm.css";
import React, { useState } from "react";
const LoginForm = ({ Logo, loginImages }) => {
  const [leerlingnummer, setLeerlingnummer] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const testUsers = [{ leerlingnummer: "user1", password: "user1" }];

    const user = testUsers.find(
      (user) => user.leerlingnummer === leerlingnummer && user.password === password
    );

    if (user) {
      alert("Inloggen gelukt!");
    } else {
      setErrorMessage("Onjuiste gebruikersnaam of wachtwoord.");
    }
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
          <form onSubmit={handleSubmit}>
            <div className="LoginForm_form_input">
              <input
                type="text"
                id="leerlingnummer"
                placeholder="Leerlingnummer"
                value={leerlingnummer}
                onChange={(e) => setLeerlingnummer(e.target.value)}
                className="LoginForm_input"
              />
            </div>
            <div className="LoginForm_form_input">
              <input
                type="password"
                id="password"
                placeholder="Wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="LoginForm_input"
              />
            </div>
            <button type="submit" className="LoginForm_Button">
              Inloggen
            </button>
            {errorMessage && <p className="LoginForm_p">{errorMessage}</p>}
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
