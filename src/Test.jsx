import React, { useEffect, useState } from "react";
import Navbar from "./Navbar_profile";
import Sidebar from "./sidebar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Switch, Link } from "@mui/material";
import axios from "axios";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export default function TestTable() {
    const [rows, setRows] = useState([]);
    const userEmail = localStorage.getItem("userEmail");

    useEffect(() => {
        const fetchSkillsAndResults = async () => {
            try {
                const skillsList = [
                    "Python", "C#", ".net", "Angular",
                    "JavaScript", "NoSQL", "TypeScript", "sql",
                    "Vue.js", "React", "Php", "Node.js", "ajax", "Jquery", "c", "java"
                ];

                // Récupérer les compétences par email
                const response = await axios.get("http://localhost:3001/get_skills_by_email", {
                    params: { email: userEmail },
                });
                const skills = response.data.skills || [];
                console.log("Compétences récupérées : ", skills);

                // Récupérer les résultats de test associés à l'email
                const testResultsResponse = await axios.get("http://localhost:3001/get_test_results_by_email", {
                    params: { email: userEmail },
                });
                const testResults = testResultsResponse.data.results || []; // Accéder directement au tableau
                console.log("Résultats de test récupérés : ", testResults);


                // Filtrer les compétences récupérées pour correspondre à celles de skillsList
                const filteredSkills = skills.filter(skill =>
                    skillsList.includes(skill)
                );

                // Préparer les données pour le tableau
                const skillRows = filteredSkills.map(skill => {
                    const normalizedSkill = skill.toLowerCase();
                    const testResult = testResults.find(result => result.skill.toLowerCase() === normalizedSkill);

                    return {
                        skill,
                        test: `QCM ${skill}`,
                        score: testResult ? testResult.score : null,
                        etat: testResult ? testResult.etat : false,
                    };
                });

                console.log("Lignes du tableau : ", skillRows);
                setRows(skillRows);
            } catch (error) {
                console.error("Erreur lors de la récupération des compétences ou des résultats de tests :", error);
            }
        };

        fetchSkillsAndResults();
    }, [userEmail]);



    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <Sidebar />
            <div style={{ flexGrow: 1, marginTop: "60px" }}>
                {/* Navbar */}
                <div style={{ padding: "40px" }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Résultats des Tests
                    </Typography>
                    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                                        Skill
                                    </TableCell>
                                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                                        Test
                                    </TableCell>
                                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                                        Score
                                    </TableCell>
                                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                                        État
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{row.skill}</TableCell>
                                        <TableCell align="center">
                                            <Link href={`/qcm_${row.skill.toLowerCase()}`} underline="hover">
                                                {row.test}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.score !== null ? `${row.score}%` : "N/A"}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.score !== null ? (
                                                row.score >= 70 ? (
                                                    <CheckCircleIcon color="success" />
                                                ) : (
                                                    <CancelIcon color="error" />
                                                )
                                            ) : (
                                                    <HourglassEmptyIcon />
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}
