import React from 'react';
import { Link } from "react-router-dom";
import "./SignupForm.css";

const SuccessPage = () => {
  return (
    <div className='succesPage'>
      <h1>Registratie Geslaagd!</h1>
      <p>Bedankt voor je registratie. Je bent succesvol ingeschreven voor de workshops.</p>
      <Link to="/">Terug naar home</Link>
    </div>
  );
};

export default SuccessPage;
