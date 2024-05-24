import { Link, useNavigate } from "react-router-dom";
import "./SignupForm.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const SignupForm = ({ Logo, SignupImages }) => {
  const [values, setValues] = useState({
    voornaam: "",
    achternaam: "",
    school: "",
    code: "",
    uitslag1: "",
    uitslag2: "",
    wachtwoord: "",
    herhaalWachtwoord: "",
    akkoort_voorwaarden: false,
  });

  const [isSuccess, setIsSuccess] = useState(false); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!String(values.code).startsWith("tyt")) {
      alert("Onbekend nummer. Vraag hulp aan jouw docent!");
      return;
    }

    if (values.wachtwoord !== values.herhaalWachtwoord) {
      alert("Wachtwoorden komen niet overeen");
      return;
    }

    axios.post('http://localhost:3002/login/signup', values)
      .then(res => {
        console.log("succes!!!!!");
        setIsSuccess(true); 
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/succes'); 
    }
  }, [isSuccess, navigate]);

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
                onChange={handleChange}
                className="SignupForm_input"
                required
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="text"
                name="code"
                value={values.code}
                placeholder="Code (Ontvangen van je docent)"
                onChange={handleChange}
                className="SignupForm_input"
                required
              />
            </div>
            <div className="SignupForm_form_input">
              <select
                name="uitslag1"
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
                name="wachtwoord"
                placeholder="Wachtwoord"
                value={values.wachtwoord}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_input">
              <input
                type="password"
                name="herhaalWachtwoord"
                placeholder="Herhaal wachtwoord"
                value={values.herhaalWachtwoord}
                onChange={handleChange}
                className="SignupForm_input"
              />
            </div>
            <div className="SignupForm_form_vinkje">
              <input
                type="checkbox"
                id="agreement"
                name="akkoort_voorwaarden"
                onChange={handleChange}
                required
              />
              <label htmlFor="agreement" className="SignupForm_form_agreetext">
                Ik ga akkoord met de{" "}
                <Link to="/policy"><a>algemene voorwaarden</a>.</Link>
              </label>
            </div>
            <button type={handleSubmit} className="SignupForm_Button">
              Registreren
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
