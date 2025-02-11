import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react";

function NavBar() {

    const [mobileStyle, setMobileStyle] = useState({ display: 'none' });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
        setMobileStyle({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            transition: '.50s'
        })

        setIsMobileMenuOpen(true);
    }

    const closeMobileMenu = () => {
        setMobileStyle({
            width: '0',
            height: '0',
            display: 'none',
            transition: '.50s',

        })

        setIsMobileMenuOpen(false);
    }

    return (
        <>
            <RxHamburgerMenu className="hamburger" onClick={
                isMobileMenuOpen ? closeMobileMenu : openMobileMenu
            } />
            <nav className="navbar" style={mobileStyle}>

                <img className="logo-s" src="/League-of-Legends-Embleme.png" alt="Logo"/>
                <ul className="links">
                    <li className="link">Accueil</li>
                    <li className="link">Champions</li>
                    <li className="link">Joueurs</li>
                    <li className="link">Classements</li>
                    <li className="link">Actualités</li>
                    <li className="link">Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar