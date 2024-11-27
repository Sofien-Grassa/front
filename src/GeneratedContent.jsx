import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/style.module.css'; // Import du fichier CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar'; // Import de Navbar
import Footer from './Footer'; // Import de Footer

function GeneratedContent() {
    const navigate = useNavigate();

    // Vérifiez si un utilisateur est connecté
    const isUserLoggedIn = !!localStorage.getItem("userEmail");

    useEffect(() => {
        const addEventsToButtons = () => {
            document.querySelectorAll(`.${styles.applyBtn}`).forEach((button) => {
                button.addEventListener('click', () => {
                    alert('Vous avez cliqué sur Postuler!');
                });
            });
        };
        addEventsToButtons();
    }, []);

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Home */}
            <div className={styles.home}>
                <div className={styles.container}>
                    <div className={styles.homeInformation}>
                        <h4 className={styles.homeInfo}>
                            Upload your CV and start your journey with us.
                        </h4>
                        <section id="about">
                            <p className={styles.homeDesc}>
                                Our platform offers a unique way to test and expand your knowledge with engaging quizzes and assessments.
                                Explore your strengths, improve your skills, and, when you're ready, seize the opportunity to apply for jobs that
                                match your abilities. Start your journey with us and take a step closer to your career goals!
                            </p>
                        </section>
                        {!isUserLoggedIn && ( // Afficher le bouton uniquement si aucun email dans le localStorage
                            <button className={styles.homeBtn} onClick={() => navigate('/login')}>
                                Let's Begin
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Opportunities */}
            <section id="opportunities">
                <div className={styles.opportunities}>
                    <div className={styles.container}>
                        <h2 className={styles.workTitle}>
                            <span>Opportunités</span> d'Emploi
                        </h2>
                        {/* Card 1 */}
                        <div className={styles.card}>
                            <img
                                src="./logo-satoripop-tunisie-20151113-221042.jpeg"
                                alt="Logo de l'entreprise"
                                className={styles.cardImg}
                            />
                            <div className={styles.cardContent}>
                                <h4 className={styles.cardTitle}>Développeur .NET</h4>
                                <p className={styles.jobDescription}>
                                    Rejoignez notre équipe pour développer des applications robustes en .NET et optimiser les performances.
                                </p>
                            </div>
                            <button className={styles.applyBtn}>Postuler</button>
                        </div>
                        {/* Card 2 */}
                        <div className={styles.card}>
                            <img
                                src="./entreprise2.png"
                                alt="Logo de l'entreprise"
                                className={styles.cardImg}
                            />
                            <div className={styles.cardContent}>
                                <h4 className={styles.cardTitle}>Développeur React</h4>
                                <p className={styles.jobDescription}>
                                    Travaillez sur des projets innovants en utilisant React pour créer des interfaces utilisateur dynamiques et performantes.
                                </p>
                            </div>
                            <button className={styles.applyBtn}>Postuler</button>
                        </div>
                        {/* Card 3 */}
                        <div className={styles.card}>
                            <img
                                src="./images.png"
                                alt="Logo de l'entreprise"
                                className={styles.cardImg}
                            />
                            <div className={styles.cardContent}>
                                <h4 className={styles.cardTitle}>Designer UI/UX</h4>
                                <p className={styles.jobDescription}>
                                    Concevez des interfaces intuitives et esthétiques pour améliorer l'expérience utilisateur sur nos plateformes digitales.
                                </p>
                            </div>
                            <button className={styles.applyBtn}>Postuler</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer (Contact) */}
            <section id="contact">
                <div>
                    <Footer />
                </div>
            </section>
        </>
    );
}

export default GeneratedContent;
