import React, { useState } from "react";
import {
    Button,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    Box,
    Typography,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    Stack,
} from "@mui/material";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Navbar from "./Navbar_profile";
import Sidebar from "./sidebar";

const QcmPage = ({ skill, questions }) => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(""));
    const [score, setScore] = useState(0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusIcon, setStatusIcon] = useState(null);

    const handleAnswerChange = (index, answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = answer;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = async () => {
        let totalScore = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                totalScore += 1;
            }
        });

        setScore(totalScore);
        setIsTestCompleted(true);

        const percentage = (totalScore / questions.length) * 100;

        if (percentage >= 70) {
            setStatusIcon(<CheckCircleIcon color="success" sx={{ fontSize: 50 }} />);
        } else {
            setStatusIcon(<CancelIcon color="error" sx={{ fontSize: 50 }} />);
        }

        const userEmail = localStorage.getItem("userEmail");

        try {
            setIsSubmitting(true);
            await axios.post("http://localhost:3001/testResultat", {
                email: userEmail,
                skill: skill,
                score: percentage,
            });
            setIsSubmitting(false);
        } catch (error) {
            console.error("Erreur lors de l'enregistrement des résultats du test", error);
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <div style={{ flexGrow: 1, marginTop: "70px" }}>
                <Box sx={{ padding: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Test de {skill}
                    </Typography>
                    <Grid container spacing={2}>
                        {questions.map((question, index) => (
                            <Grid item xs={12} key={index}>
                                <Card sx={{ boxShadow: 3 }}>
                                    <CardContent>
                                        <FormControl component="fieldset" fullWidth>
                                            <FormLabel component="legend">
                                                <Typography variant="h6">{`Question ${index + 1}`}</Typography>
                                                <Typography>{question.question}</Typography>
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label={`question-${index}`}
                                                name={`question-${index}`}
                                                value={answers[index]}
                                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                            >
                                                {question.options.map((option, idx) => (
                                                    <FormControlLabel
                                                        key={idx}
                                                        value={option}
                                                        control={<Radio />}
                                                        label={option}
                                                    />
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!isTestCompleted ? (
                        <Box sx={{ textAlign: "center", marginTop: 4 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                sx={{
                                    padding: "10px 20px",
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    textTransform: "uppercase",
                                }}
                            >
                                {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Soumettre"}
                            </Button>
                        </Box>
                    ) : (
                        <Stack spacing={2} sx={{ marginTop: 4, alignItems: "center" }}>
                            <Typography variant="h5">Votre score : {score}</Typography>
                            <Typography variant="h6">Pourcentage : {(score / questions.length) * 100}%</Typography>
                            {statusIcon}
                        </Stack>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default QcmPage;
