import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Importez la Navbar
import GeneratedContent from "./GeneratedContent"; // Page principale
import Login from "./Login"; // Page de connexion
import ResetPassword from "./ResetPassword"; // Page de réinitialisation
import Footer from "./Footer"; // Import du Footer
import Sidebar from "./sidebar"; // Assurez-vous de l'import correct
import CV from "./Cv"; // Import du Footer
import QcmPage from "./QcmPage"; // Import du composant QCM
import { javaQuestions, reactQuestions, phpQuestions } from './Questions'; // Import de tes questions

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GeneratedContent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset_password" element={<ResetPassword />} />
                <Route path="/sidebar" element={<Sidebar />} /> {/* Nouvelle route */}
                <Route path="/cv" element={<CV />} /> {/* Nouvelle route */}
                <Route path="/qcm_java" element={<QcmPage skill="Java" questions={javaQuestions} />} />
                <Route path="/qcm/react" element={<QcmPage skill="ReactJS" questions={reactQuestions} />} />
                <Route path="/qcm/php" element={<QcmPage skill="PHP" questions={phpQuestions} />} />
            </Routes>
          
           
        </Router>
    );
}

export default App;
