import React from 'react';
import styles from './css/style.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p>© 2024 by Sofien and Amal. All rights reserved.</p>
                <div className={styles.footerContact}>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:SaOpportunities@email.com">SaOpportunities@email.com</a>
                    </p>
                    <p>
                        <strong>Phone:</strong> +216 123 456 789
                    </p>
                </div>
                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
