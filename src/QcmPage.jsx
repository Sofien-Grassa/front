import React, { useState } from 'react';
import { Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Box, Typography } from '@mui/material';

const QcmPage = ({ skill, questions }) => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [score, setScore] = useState(0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);

    const handleAnswerChange = (index, answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = answer;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        let totalScore = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                totalScore += 10; // Exemple de score pour chaque bonne réponse
            }
        });
        setScore(totalScore);
        setIsTestCompleted(true);
    };

    return (
        <Box sx={{ width: '80%', maxWidth: '800px', margin: 'auto', padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Test de {skill}
            </Typography>
            {questions.map((question, index) => (
                <Box key={index} sx={{ marginBottom: 3 }}>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">{question.question}</FormLabel>
                        <RadioGroup
                            aria-label={question.question}
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
                </Box>
            ))}
            {!isTestCompleted ? (
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Soumettre</Button>
                </Box>
            ) : (
                <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                    <Typography variant="h5">Votre score : {score}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default QcmPage;
