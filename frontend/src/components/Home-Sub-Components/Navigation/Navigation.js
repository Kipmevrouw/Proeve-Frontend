import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = ({Logo}) => {
    return (
        <>
            <nav className='nav'>
                <div className='nav-container'>
                    <div className='navDiv_Left'>
                        <img src={Logo} alt="TechCampusLogo" className='navLogo'></img>
                    </div>
                    <div className='navDiv_Right'>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                            <a className='nav_Login'>Inloggen</a>
                        </Link>
                        <Link to="/signup">
                            <button type="button" className='nav_Signup'>Schrijf je in!</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;