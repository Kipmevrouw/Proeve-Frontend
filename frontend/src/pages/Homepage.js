import Footer from "../components/Home-Sub-Components/Footer/Footer";
import Navigation from "../components/Home-Sub-Components/Navigation/Navigation";
import Section_1 from "../components/Home-Sub-Components/Section_1/Section_1";
import Section_2 from "../components/Home-Sub-Components/Section_2/Section_2";

const Homepage = () => {
    return (
        <>
            <Navigation
                Logo="/images/Home-Sub-images/TechCampusLogo.png"
            />
            <Section_1/>
            {/* <Section_2/>
            <Footer/> */}
        </>
    );
}

export default Homepage;