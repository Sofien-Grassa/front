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
import Jobs from "./jobs"; // Import du composant QCM

import {
    javaQuestions, dotNetQuestions, nodeJsQuestions, sqlQuestions, reactQuestions, csharpQuestions,   phpQuestions,  javascriptQuestions,    cQuestions,    ajaxQuestions,jqueryQuestions,   vueQuestions,   typeScriptQuestions, pythonQuestions,  angularQuestions,    noSqlQuestions
} from './Questions';
import TestTable from "./Test"
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GeneratedContent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset_password" element={<ResetPassword />} />
                <Route path="/sidebar" element={<Sidebar />} /> {/* Nouvelle route */}
                <Route path="/cv" element={<CV />} /> {/* Nouvelle route */}
                <Route path="/tests" element={<TestTable />} /> {/* Nouvelle route */}
                <Route path="/jobs" element={<Jobs />} /> {/* Nouvelle route */}



                <Route path="/qcm_java" element={<QcmPage skill="Java" questions={javaQuestions} />} />
                <Route path="/qcm_React" element={<QcmPage skill="React" questions={reactQuestions} />} />
                <Route path="/qcm_Php" element={<QcmPage skill="PHP" questions={phpQuestions} />} />
                <Route path="/qcm_JavaScript" element={<QcmPage skill="JavaScript" questions={javascriptQuestions} />} />
                <Route path="/qcm_c" element={<QcmPage skill="c" questions={cQuestions} />} />
                <Route path="/qcm_ajax" element={<QcmPage skill="ajax" questions={ajaxQuestions} />} />
                <Route path="/qcm_Jquery" element={<QcmPage skill="Jquery" questions={jqueryQuestions} />} />
                <Route path="/qcm_vue.js" element={<QcmPage skill="Vue.js" questions={vueQuestions} />} />
                <Route path="/qcm_TypeScript" element={<QcmPage skill="TypeScript" questions={typeScriptQuestions} />} />
                <Route path="/qcm_Python" element={<QcmPage skill="Python" questions={pythonQuestions} />} />
                <Route path="/qcm_Angular" element={<QcmPage skill="Angular" questions={angularQuestions} />} />
                <Route path="/qcm_NoSQL" element={<QcmPage skill="NoSQL" questions={noSqlQuestions} />} />
                <Route path="/qcm_sql" element={<QcmPage skill="sql" questions={sqlQuestions} />} />
                <Route path="/qcm_.net" element={<QcmPage skill=".net" questions={dotNetQuestions} />} />
                <Route path="/qcm_Node.js" element={<QcmPage skill="Node.js" questions={nodeJsQuestions} />} />
                <Route path="/qcm_c#" element={<QcmPage skill="c#" questions={csharpQuestions} />} />



            </Routes>
          
           
        </Router>
    );
}

export default App;
