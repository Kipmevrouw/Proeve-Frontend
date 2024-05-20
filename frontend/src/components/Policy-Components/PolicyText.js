import { Link } from "react-router-dom";
import "./PolicyText.css";

const PolicyText = ({ Logo }) => {
  return (
    <>
      <div className="PolicyNav">
        <Link to="/">
          <img src={Logo} alt="TechCampusLogo" className="PolicyLogo" />
        </Link>
      </div>
      <div className="PolicyText">
        <h1>Privacyverklaring</h1>
        <p>
          Jouw privacy is belangrijk voor ons. Wanneer jij je aanmeldt voor een
          bezoek aan Tech your Talent verstrek je persoonsgegevens aan de
          TechCampus Amsterdam. TechCampus Amsterdam is de organisator van Tech
          your Talent Amsterdam. Wanneer je jouw gegevens of de gegevens
          verstrekt, accepteer je het gebruik van je persoonsgegevens voor een
          aantal doeleinden die hieronder gespecificeerd worden. We gebruiken je
          gegevens voor onze eigen administratie.
        </p>
        <h3>Verstrekking aan derden</h3>
        <p>
          Wij verstrekken jouw gegevens niet aan derden. Zijn mijn gegevens goed
          beveiligd? Ja, jouw gegevens worden passend beveiligd conform de eisen
          in de Wet bescherming persoonsgegevens.
        </p>
        <h3>Vragen over privacy?</h3>
        <p>
          Je heeft te allen tijde het recht om aanpassing of verwijdering van
          jew gegevens te vragen, aan welk verzoek Amports redelijkerwijs gevolg
          zal geven. Hiervoor kjent je contact met Amports opnemen via
          onderstaande contactgegevens. Wij willen je vragen dit verzoek zoveel
          mogelijk te specificeren, om je zo goed mogelijk van dienst te kjennen
          zijn. Heeft je vragen? Neem dan contact op met Roel Mostert.
          TechCampus Amsterdam <a href="mailto:techlobboeken@sto-amsterdam.nl">techlobboeken@sto-amsterdam.nl</a>
        </p>
        <h3>Wijziging van dit privacy statement</h3>
        <p>
          TechCampus Amsterdam behoudt zich het recht voor om te allen tijde dit
          privacy statement te wijzigen.
        </p>
      </div>
    </>
  );
};

export default PolicyText;
