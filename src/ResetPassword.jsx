import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Components from "./Component_reset_css"; // Assurez-vous que vous avez importé les composants stylisés ici
import Navbar from "./Navbar"; // Import de la Navbar
import Footer from "./Footer"; // Import du Footer
function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage("Les mots de passe ne correspondent pas.");
            toast.error("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await axios.post(`http://localhost:3001/reset_password?token=${token}`, {
                newPassword,
            });
            toast.success(response.data.message);
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            toast.error(error.response?.data?.message || "Erreur lors de la réinitialisation.");
        }
    };

    return (
         <>
            <Navbar />

        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9" }}>
            <ToastContainer />
            <Components.Container>
                <Components.Form onSubmit={handleSubmit}>
                    <Components.Title>Réinitialiser votre mot de passe</Components.Title>
                    {message && <Components.Message>{message}</Components.Message>}
                    <Components.Input
                        type="password"
                        placeholder="Nouveau mot de passe"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <Components.Input
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Components.Button type="submit">Réinitialiser</Components.Button>
                </Components.Form>
            </Components.Container>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default ResetPassword;
