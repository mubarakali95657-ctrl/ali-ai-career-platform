import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
import ATSChecker from "./pages/ATSChecker";
import Interview from "./pages/Interview";

function Home() {
  return (
    <div style={mainStyle}>
      <h1 style={titleStyle}>Ali AI Career Platform</h1>

      <p style={subtitleStyle}>
        Professional AI Tools for Career Growth
      </p>

      <div style={gridStyle}>

        <div style={cardStyle}>
          <h2>AI Resume Generator</h2>
          <p>Create professional resumes instantly using AI.</p>

          <Link to="/resume">
            <button style={buttonStyle}>Open Tool</button>
          </Link>
        </div>

        <div style={cardStyle}>
          <h2>Cover Letter Generator</h2>
          <p>Generate powerful cover letters for any job.</p>

          <Link to="/cover-letter">
            <button style={buttonStyle}>Open Tool</button>
          </Link>
        </div>

        <div style={cardStyle}>
          <h2>ATS Resume Checker</h2>
          <p>Analyze resume ATS score and improve ranking.</p>

          <Link to="/ats-checker">
            <button style={buttonStyle}>Open Tool</button>
          </Link>
        </div>

        <div style={cardStyle}>
          <h2>Interview Questions</h2>
          <p>Prepare for interviews with AI-generated questions.</p>

          <Link to="/interview">
            <button style={buttonStyle}>Open Tool</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/ats-checker" element={<ATSChecker />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>

    </BrowserRouter>
  );
}

const mainStyle = {
  minHeight: "100vh",
  backgroundColor: "#020c2b",
  color: "white",
  padding: "50px",
  fontFamily: "Arial"
};

const titleStyle = {
  textAlign: "center",
  fontSize: "60px",
  marginBottom: "10px"
};

const subtitleStyle = {
  textAlign: "center",
  color: "#94a3b8",
  marginBottom: "60px",
  fontSize: "24px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px"
};

const cardStyle = {
  backgroundColor: "#1e293b",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 0 15px rgba(0,0,0,0.3)"
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px 25px",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px"
};

export default App;