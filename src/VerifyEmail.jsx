import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function VerifyEmail() {
    const navigate = useNavigate();
    const location = useLocation();
    const token = new URLSearchParams(location.search).get("token");

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/verify?token=${token}`);
                toast.success(response.data.message, {
                    position: "top-center",
                    autoClose: 3000, // Toast disparaît après 3 secondes
                });
                setTimeout(() => navigate("/login"), 3000); // Redirection après 3 secondes
            } catch (error) {
                toast.error("Erreur lors de la vérification de l'email.");
            }
        };

        if (token) {
            verifyToken();
        }
    }, [token, navigate]);

    return (
        <div>
            <ToastContainer />
            <h2>Vérification en cours...</h2>
            <p>Si vous voyez ce texte, cela signifie que la page `VerifyEmail` est chargée.</p>
        </div>
    );
}

export default VerifyEmail;
