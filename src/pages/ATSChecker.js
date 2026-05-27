import React, { useState } from "react";

function ATSChecker() {

  const [resume, setResume] = useState("");
  const [score, setScore] = useState("");
  const [tips, setTips] = useState("");

  const analyzeResume = () => {

    let atsScore = 60;

    if (resume.includes("React")) atsScore += 10;
    if (resume.includes("JavaScript")) atsScore += 10;
    if (resume.includes("Node")) atsScore += 10;
    if (resume.includes("API")) atsScore += 5;
    if (resume.length > 300) atsScore += 5;

    if (atsScore > 100) atsScore = 100;

    setScore(atsScore);

    const improvementTips = `
✔ Add more technical keywords.
✔ Include measurable achievements.
✔ Use professional formatting.
✔ Mention relevant technologies.
✔ Keep resume ATS-friendly.
✔ Add certifications and projects.
`;

    setTips(improvementTips);
  };

  return (
    <div style={container}>

      <div style={card}>

        <h1 style={title}>
          ATS Resume Checker
        </h1>

        <p style={subtitle}>
          Analyze resume ATS score and improve ranking.
        </p>

        <textarea
          style={textarea}
          placeholder="Paste your resume here..."
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />

        <button
          style={button}
          onClick={analyzeResume}
        >
          Analyze Resume
        </button>

        {score && (
          <div style={resultBox}>

            <h2>
              ATS Score: {score}%
            </h2>

            <div style={progressBackground}>
              <div
                style={{
                  ...progressBar,
                  width: `${score}%`
                }}
              />
            </div>

            <h3 style={{ marginTop: "25px" }}>
              Improvement Tips
            </h3>

            <pre style={tipsStyle}>
              {tips}
            </pre>

          </div>
        )}

      </div>

    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f172a, #111827)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
};

const card = {
  width: "100%",
  maxWidth: "850px",
  backgroundColor: "#1e293b",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 0 20px rgba(0,0,0,0.4)",
};

const title = {
  fontSize: "48px",
  color: "#38bdf8",
  textAlign: "center",
  marginBottom: "10px",
};

const subtitle = {
  textAlign: "center",
  color: "#cbd5e1",
  marginBottom: "35px",
  fontSize: "18px",
};

const textarea = {
  width: "100%",
  height: "250px",
  padding: "20px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
};

const button = {
  width: "100%",
  marginTop: "20px",
  padding: "16px",
  background: "linear-gradient(to right, #06b6d4, #2563eb)",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};

const resultBox = {
  marginTop: "35px",
  backgroundColor: "#0f172a",
  padding: "25px",
  borderRadius: "15px",
  color: "white",
};

const progressBackground = {
  width: "100%",
  height: "25px",
  backgroundColor: "#334155",
  borderRadius: "20px",
  overflow: "hidden",
  marginTop: "15px",
};

const progressBar = {
  height: "100%",
  background: "linear-gradient(to right, #22c55e, #06b6d4)",
};

const tipsStyle = {
  whiteSpace: "pre-wrap",
  lineHeight: "1.8",
};

export default ATSChecker;