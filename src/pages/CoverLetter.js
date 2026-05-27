import React, { useState } from "react";

function CoverLetter() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");

  const generateLetter = () => {
    const letter = `
Dear Hiring Manager,

My name is ${name} and I am excited to apply for the ${job} position at ${company}.

With strong experience in ${skills}, I believe I can contribute positively to your company and team. I am passionate about professional growth, teamwork, and delivering high-quality results.

I am confident that my dedication and technical abilities make me a strong candidate for this role. I would welcome the opportunity to discuss how I can contribute to ${company}.

Thank you for your time and consideration.

Sincerely,
${name}
    `;

    setResult(letter);
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Cover Letter Generator</h1>

        <p style={subtitle}>
          Generate powerful cover letters for any job instantly using AI.
        </p>

        <input
          style={input}
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={input}
          type="text"
          placeholder="Job Position"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <input
          style={input}
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <textarea
          style={textarea}
          placeholder="Your Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button style={button} onClick={generateLetter}>
          Generate Cover Letter
        </button>

        {result && (
          <div style={resultBox}>
            <h2>Generated Cover Letter</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #111827, #1e3a8a)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
};

const card = {
  width: "100%",
  maxWidth: "800px",
  backgroundColor: "#1e293b",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
};

const title = {
  fontSize: "48px",
  color: "#60a5fa",
  marginBottom: "10px",
  textAlign: "center",
};

const subtitle = {
  color: "#cbd5e1",
  fontSize: "18px",
  textAlign: "center",
  marginBottom: "40px",
};

const input = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
};

const textarea = {
  width: "100%",
  height: "120px",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
};

const button = {
  width: "100%",
  padding: "16px",
  background: "linear-gradient(to right, #2563eb, #7c3aed)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};

const resultBox = {
  marginTop: "30px",
  backgroundColor: "#0f172a",
  padding: "25px",
  borderRadius: "12px",
  color: "white",
  whiteSpace: "pre-wrap",
  lineHeight: "1.8",
};

export default CoverLetter;