import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Components from "./Components";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./sidebar";
import Navbar from "./Navbar"; // Importez la Navbar
import Footer from './Footer'; // Import de Footer

function Login() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isVerified = searchParams.get("verified");
    const [signIn, toggle] = useState(true);
    const navigate = useNavigate(); // Hook pour la navigation



    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            toast.info("Vous êtes déjà connecté. Redirection...");
            navigate("/CV"); // Redirige vers la page appropriée
        }
    }, [navigate]);

    useEffect(() => {
        if (isVerified) {
            toast.success("Your email has been verified successfully. Please log in.");
        }
    }, [isVerified]);

    // Inscription
    const handleRegister = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password) {
            toast.error("Please fill in all the fields.");
            return;
        }
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/register_users", {
                firstName,
                lastName,
                email,
                password,
            });
            toast.success("Registration successful! Check your email for verification.");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            toast.error("Registration failed. This email may already be in use.");
        }
    };

    // Connexion
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email ) {
            toast.error("Please enter your email.");
            return;
        } 
        if (!password) {
            toast.error("Please enter your  password.");
            return;
        }
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/login_users", {
                email,
                password,
            });
            localStorage.setItem("userEmail", email); // Stockez l'email de l'utilisateur connecté
            toast.success("Login successful!");
            navigate("/CV");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Login failed. Please try again."
            );
        }
    };

    // Mot de passe oublié
    const handleForgotPassword = async () => {
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/forgot_password", { email });
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "Error during password reset.");
        }
    };

    return (
        <>
            <Navbar /> {/* Navbar globale */}

        <div className={styles.body}>
            <ToastContainer />
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleRegister}>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Components.Input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Components.Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Button type="submit">Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleLogin}>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Anchor onClick={handleForgotPassword}>
                            Forgot your password?
                        </Components.Anchor>
                        <Components.Button type="submit">Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info.
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter your personal details and start your journey with us.
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
           
            </div>
            <section id="contact">
                <div >
                    <Footer />
                </div>
            </section>
        </>
    );
}

export default Login;
