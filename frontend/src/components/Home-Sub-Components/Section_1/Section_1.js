import './Section_1.css';
import BackgroundImage from "./HomePageBackground.jpg"

const Section_1 = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh', 
                }}
                >
                {/* Inhoud van je app hier */}
            </div>
        </>
    );
}

export default Section_1;