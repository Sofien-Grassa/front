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
                    autoClose: 3000, // Toast dispara�t apr�s 3 secondes
                });
                setTimeout(() => navigate("/login"), 3000); // Redirection apr�s 3 secondes
            } catch (error) {
                toast.error("Erreur lors de la v�rification de l'email.");
            }
        };

        if (token) {
            verifyToken();
        }
    }, [token, navigate]);

    return (
        <div>
            <ToastContainer />
            <h2>V�rification en cours...</h2>
            <p>Si vous voyez ce texte, cela signifie que la page `VerifyEmail` est charg�e.</p>
        </div>
    );
}

export default VerifyEmail;
