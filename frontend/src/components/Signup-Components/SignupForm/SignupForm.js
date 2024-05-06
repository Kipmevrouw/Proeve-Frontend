import { Link } from "react-router-dom";
import "./SignupForm.css";
import React, { useState } from "react";

const SignupForm = ({ Logo, SignupImages }) => {
  const [formData, setFormData] = useState({
    email: "",
    leerlingnummer: "",
    school: "",
    uitslag1: "",
    uitslag2: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
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
          <form onSubmit={handleSubmit}>
            <div className="SignupForm_form_input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="text"
                name="leerlingnummer"
                placeholder="Leerlingnummer"
                value={formData.leerlingnummer}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="text"
                name="school"
                placeholder="School"
                value={formData.school}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_input">
              <select
                name="uitslag1"
                value={formData.uitslag1}
                onChange={handleChange}
                className="SignupForm_input"
              >
                <option value="" className="SignupForm_input_dropdown">
                  - Selecteer jouw uitslag -
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="SignupForm_form_input">
              <select
                name="uitslag2"
                value={formData.uitslag2}
                onChange={handleChange}
                className="SignupForm_input"
              >
                <option value="" className="SignupForm_input_dropdown">
                  - Selecteer jouw uitslag -
                </option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="SignupForm_form_input">
              <input
                type="password"
                name="password"
                placeholder="Wachtwoord"
                value={formData.password}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="password"
                name="repeatPassword"
                placeholder="Herhaal wachtwoord"
                value={formData.repeatPassword}
                onChange={handleChange}
                className="SignupForm_input"
              />
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
