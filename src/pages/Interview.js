import React, { useState } from "react";

function Interview() {
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("");
  const [questions, setQuestions] = useState("");

  const generateQuestions = () => {
    const result = `
1. Tell me about yourself.

2. Why do you want to work as a ${job}?

3. What technical skills do you have related to ${job}?

4. Explain your experience of ${experience} years in IT field.

5. What programming languages are you comfortable with?

6. Explain the difference between frontend and backend development.

7. What is React.js and why is it used?

8. Explain APIs and how they work.

9. What is GitHub and why is version control important?

10. Describe a difficult technical problem you solved.

11. What are your strengths and weaknesses?

12. How do you handle deadlines and pressure?

13. Explain teamwork experience in software projects.

14. Where do you see yourself in 5 years?

15. Why should we hire you?
    `;

    setQuestions(result);
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>IT Interview Questions Generator</h1>

        <p style={subtitle}>
          Prepare for interviews with AI-generated IT questions.
        </p>

        <input
          style={input}
          type="text"
          placeholder="Job Position (Example: Frontend Developer)"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <input
          style={input}
          type="text"
          placeholder="Years of Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <button style={button} onClick={generateQuestions}>
          Generate Questions
        </button>

        {questions && (
          <div style={resultBox}>
            <h2>Interview Questions</h2>
            <p>{questions}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f172a, #1e293b)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
};

const card = {
  width: "100%",
  maxWidth: "800px",
  backgroundColor: "#111827",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
};

const title = {
  fontSize: "45px",
  color: "#38bdf8",
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

const button = {
  width: "100%",
  padding: "16px",
  background: "linear-gradient(to right, #06b6d4, #3b82f6)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};

const resultBox = {
  marginTop: "30px",
  backgroundColor: "#1e293b",
  padding: "25px",
  borderRadius: "12px",
  color: "white",
  whiteSpace: "pre-wrap",
  lineHeight: "1.8",
};

export default Interview;