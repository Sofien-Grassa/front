import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './css/style.module.css';

function Navbar({ refs }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (hash) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollToSection(hash);
            }, 100);
        } else {
            scrollToSection(hash);
        }
    };

    const scrollToSection = (hash) => {
        const section = document.querySelector(hash);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Vérifiez si un utilisateur est connecté
    const isUserLoggedIn = !!localStorage.getItem("userEmail");

    const handleLogout = () => {
        localStorage.removeItem("userEmail"); // Supprimez l'email de l'utilisateur
        navigate("/login"); // Redirigez vers la page de connexion
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h2
                        className={styles.logoText}
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                    >
                        Sa Opportunities
                    </h2>
                </div>
                <ul className={styles.ulList}>
                    <li className={styles.listItem}>
                        <a href="#" onClick={() => handleNavigation("#opportunities")}>
                            Opportunities
                        </a>
                    </li>
                    <li className={styles.listItem}>
                        <a href="#" onClick={() => handleNavigation("#about")}>
                            About
                        </a>
                    </li>
                    <li className={styles.listItem}>
                        <a href="#" onClick={() => handleNavigation("#contact")}>
                            Contact
                        </a>
                    </li>
                    {isUserLoggedIn ? (
                        <>
                            <li className={styles.listItem}>
                                <a href="#" onClick={() => navigate('/cv')}>
                                    Profile
                                </a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="#" onClick={handleLogout}>
                                    Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        location.pathname !== '/login' && location.pathname !== '/reset_password' && (
                            <li className={styles.listItem}>
                                <a href="#" onClick={() => navigate('/login')}>
                                    Sign In
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
