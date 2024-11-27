import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar_profile";
import Sidebar from "./sidebar";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function CV() {
    const navigate = useNavigate();
    const [cvList, setCvList] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const userEmail = localStorage.getItem("userEmail");

    useEffect(() => {
        if (!userEmail) {
            navigate("/login");
            return;
        }
        fetchCVs();
    }, [navigate, userEmail]);

    // Fetch CVs from backend
    const fetchCVs = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/get_cv_by_email?email=${userEmail}`);
            setCvList(response.data.cvs);
        } catch (error) {
            console.error("Error fetching CVs:", error);
        }
    };

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Upload CV
    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("email", userEmail);

        try {
            await axios.post("http://localhost:3001/upload_cv", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("File uploaded successfully.");
            setSelectedFile(null);
            fetchCVs();
        } catch (error) {
            console.error("Error uploading file:", error);
            toast.error("Error uploading the file.");
        }
    };

    // Handle CV deletion
    const handleDelete = async (cvId) => {
        try {
            await axios.delete(`http://localhost:3001/delete_cv/${cvId}`);
            toast.success("File deleted successfully.");
            setCvList((prevList) => prevList.filter((cv) => cv._id !== cvId));
        } catch (error) {
            console.error("Error deleting CV:", error);
            toast.error("Error deleting the CV.");
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <Navbar />
                <div style={{ padding: "20px" }}>
                    <h1 style={{ marginBottom: "20px" }}>Manage Your CVs</h1>

                    {/* Upload Section */}
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "20px" }}>
                        <Button
                            component="label"
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload Files
                            <input
                                type="file"
                                hidden
                                onChange={handleFileChange}
                            />
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpload}
                            disabled={!selectedFile}
                        >
                            Submit
                        </Button>
                    </div>

                    {/* CV List Section */}
                    <div>
                        <Typography
                            variant="h5"
                            gutterBottom
                            style={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                color: "#444",
                                textAlign: "left",
                                marginBottom: "15px",
                            }}
                        >
                            Available CVs:
                        </Typography>
                        {cvList.length === 0 ? (
                            <Typography
                                variant="body2"
                                style={{
                                    color: "#888",
                                    fontStyle: "italic",
                                    textAlign: "center",
                                    marginTop: "20px",
                                }}
                            >
                                No CVs available at the moment.
                            </Typography>
                        ) : (
                                <div
                                    style={{
                                        maxWidth: "400px", // Réduction de la largeur maximale
                                        margin: "10px auto", // Centrer horizontalement avec un espace entre chaque box
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                        marginLeft: "5px",
                                        marginTop:"40px",
                                    }}
                                >
                                    {cvList.map((cv) => (
                                        <Paper
                                            elevation={3}
                                            key={cv._id}
                                            style={{
                                                padding: "10px", // Réduction du padding pour un design plus compact
                                                display: "flex",
                                                alignItems: "center", // Aligner verticalement le texte et l'icône
                                                backgroundColor: "#f9f9f9",
                                                borderRadius: "8px",
                                                width: "100%", // Ajuste la largeur au conteneur parent
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    fontWeight: "bold",
                                                    cursor: "pointer",
                                                    color: "#1a73e8",
                                                    flexGrow: 1, // Permet au texte de prendre tout l'espace disponible
                                                    marginRight: "10px", // Ajouter un espace entre le texte et l'icône
                                                }}
                                                onClick={() => window.open(`http://localhost:3001/uploads/${cv.fileName}`, "_blank")}
                                            >
                                                {cv.fileName}
                                            </Typography>
                                            <IconButton
                                                color="error"
                                                onClick={() => handleDelete(cv._id)}
                                                style={{
                                                    padding: "5px", // Réduit l'espace autour de l'icône
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Paper>
                                    ))}
                                </div>

                        )}
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
