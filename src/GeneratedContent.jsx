import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    Box,
    Paper,
    IconButton
} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from './css/style.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar';
import Footer from './Footer';

const jobs = [
    {
        title: "Développeur .NET",
        description: "Rejoignez notre équipe pour développer des applications robustes en .NET et optimiser les performances.",
        image: "./logo-satoripop-tunisie-20151113-221042.jpeg",
        skills: ["C#", ".NET", "SQL"],
    },
    {
        title: "Développeur React",
        description: "Travaillez sur des projets innovants en utilisant React pour créer des interfaces utilisateur dynamiques et performantes.",
        image: "./entreprise2.png",
        skills: ["React", "JavaScript", "TypeScript"],
    },
    {
        title: "Développeur Backend PHP",
        description: "Concevez des interfaces intuitives et esthétiques pour améliorer l'expérience utilisateur sur nos plateformes digitales.",
        image: "./images.png",
        skills: ["AJAX", "jQuery", "PHP"],
    },
    {
        title: "Développeur Python",
        description: "Développez des solutions backend efficaces et scalables en utilisant Python et ses frameworks populaires.",
        image: "./wattnow.png",
        skills: ["Python", "NoSQL"],
    },
    {
        title: "Développeur Java",
        description: "Participez au développement d'applications Java performantes et sécurisées pour nos projets critiques.",
        image: "./seabex.jpg",
        skills: ["Java", "SQL"],
    },
    {
        title: "Analyste de données",
        description: "Transformez les données en insights exploitables pour guider les décisions stratégiques.",
        image: "./instadeep.jpg",
        skills: ["Python", "SQL"],
    },
    {
        title: "Développeur Backend Node.js",
        description: "Construire des APIs RESTful ou GraphQL scalables, gérer les bases de données NoSQL, et optimiser les performances backend.",
        image: "./kumuls.png",
        skills: ["Node.js", "NoSQL", "JavaScript"],
    },
    {
        title: "Développeur Full Stack",
        description: "Construire des applications web complètes, gérer la logique côté client avec Angular et Vue.js, et interagir avec des bases de données SQL pour créer des applications performantes.",
        image: "./gomycode.png",
        skills: ["Angular", "SQL", "Vue.js"],
    },
    {
        title: "Ingénieur en Compilateurs",
        description: "Rejoignez notre équipe pour concevoir et développer des compilateurs et des outils de traitement de langage pour des langages de programmation spécifiques.",
        image: "./itrend.png",
        skills: ["C"],
    },
];
function GeneratedContent() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [cvs, setCvs] = useState([]);
    const [selectedCv, setSelectedCv] = useState(null);
    const [currentJob, setCurrentJob] = useState(null);

    // Vérifiez si un utilisateur est connecté
    const isUserLoggedIn = !!localStorage.getItem("userEmail");
    const userEmail = localStorage.getItem("userEmail");

    const handlePostulerClick = async (job) => {
        if (!isUserLoggedIn) {
            toast.error("Vous devez vous connecter pour postuler à un emploi", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3001/get_cv_by_email?email=${userEmail}`);
            setCvs(response.data.cvs);
            setCurrentJob(job);
            setModalOpen(true);
        } catch (error) {
            console.error("Erreur lors de la récupération des CV :", error);
            toast.error("Impossible de charger vos CV. Veuillez réessayer.");
        }
    };

    const handleCvSelect = (cvFileName) => {
        const selected = cvs.find(cv => cv.fileName === cvFileName);
        setSelectedCv(selected);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedCv(null);
        setCurrentJob(null);
    };

    const handlePostulation = () => {
        if (selectedCv) {
            toast.success(`Votre candidature pour le poste de ${currentJob.title} a été envoyée avec succès !`);
        } else {
            toast.error("Veuillez sélectionner un CV avant de postuler.");
        }
        setModalOpen(false);
    };

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
                        {!isUserLoggedIn && (
                            <button className={styles.homeBtn} onClick={() => navigate('/login')}>
                                Let's Begin
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Opportunités d'Emploi */}
            <section id="opportunities">
                <div className={styles.opportunities}>
                    <div className={styles.container}>
                        <h2 className={styles.workTitle}>
                            <span>Opportunités</span> d'Emploi
                        </h2>
                        <Grid container spacing={4} justifyContent="center">
                            {jobs.map((job, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card sx={{
                                        width: 345,
                                        height: 450,
                                        boxShadow: 3,
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'scale(1.05)' },
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={job.image}
                                            alt={`Logo de ${job.title}`}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                                {job.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {job.description}
                                            </Typography>
                                            <div style={{ marginTop: '10px' }}>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                                    Compétences :
                                                </Typography>
                                                {job.skills.map((skill, i) => (
                                                    <Typography
                                                        variant="caption"
                                                        key={i}
                                                        sx={{
                                                            marginRight: 1,
                                                            backgroundColor: '#f0f0f0',
                                                            borderRadius: '8px',
                                                            padding: '4px 8px'
                                                        }}
                                                    >
                                                        {skill}
                                                    </Typography>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardActions sx={{ paddingTop: 0 }}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                sx={{ '&:hover': { backgroundColor: '#3700b3' } }}
                                                onClick={() => handlePostulerClick(job)}
                                            >
                                                Postuler
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </section>

            {/* Modal pour la sélection du CV */}
            <Dialog
                open={modalOpen}
                onClose={handleModalClose}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle sx={{
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 24px'
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1B1833' }}>
                        Postuler à {currentJob?.title}
                    </Typography>
                    <IconButton onClick={handleModalClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers sx={{ padding: '24px' }}>
                    <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666', marginBottom: 2 }}>
                            Sélectionnez le CV que vous souhaitez envoyer
                        </Typography>
                    </Box>

                    <FormControl component="fieldset" fullWidth>
                        <RadioGroup
                            value={selectedCv?.fileName || ""}
                            onChange={(e) => handleCvSelect(e.target.value)}
                        >
                            {cvs.map((cv, index) => (
                                <Paper
                                    key={index}
                                    elevation={selectedCv?.fileName === cv.fileName ? 3 : 1}
                                    sx={{
                                        marginBottom: 2,
                                        transition: 'all 0.3s ease',
                                        border: selectedCv?.fileName === cv.fileName
                                            ? '2px solid #3700b3'
                                            : '1px solid #e0e0e0',
                                        '&:hover': {
                                            boxShadow: 2,
                                            transform: 'scale(1.02)'
                                        }
                                    }}
                                >
                                    <FormControlLabel
                                        value={cv.fileName}
                                        control={<Radio />}
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                                <PictureAsPdfIcon sx={{ color: '#FF0000', marginRight: 2 }} />
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                        {cv.fileName}
                                                    </Typography>
                                                    <Typography variant="caption" color="textSecondary">
                                                        {/* You could add file size or upload date here */}
                                                        Dernière mise à jour : récemment
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        sx={{ width: '100%', padding: '12px' }}
                                    />
                                </Paper>
                            ))}
                        </RadioGroup>
                    </FormControl>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 3,
                        padding: '16px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px'
                    }}>
                       
                    </Box>
                </DialogContent>

                <DialogActions sx={{ padding: '16px 24px' }}>
                    <Button
                        onClick={handleModalClose}
                        color="black"
                        variant="outlined"
                        sx={{ marginRight: 2 }}
                    >
                        Annuler
                    </Button>
                    <Button
                        onClick={handlePostulation}
                        variant="contained"
                        color="primary"
                        disabled={!selectedCv}
                        sx={{
                            fontWeight: 'bold',
                            '&:disabled': {
                                backgroundColor: '#e0e0e0',
                                color: '#a0a0a0'
                            }
                        }}
                    >
                        Confirmer la candidature
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Toast Notification */}
            <ToastContainer position="top-right" autoClose={3000} />

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