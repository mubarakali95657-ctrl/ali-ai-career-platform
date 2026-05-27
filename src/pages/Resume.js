import { useState } from "react";

function Resume() {

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  const [resume, setResume] = useState("");

  const generateResume = () => {

    const output = `
=================================

PROFESSIONAL RESUME

=================================

Name:
${name}

Job Title:
${job}

Skills:
${skills}

Experience:
${experience}

Professional Summary:
${name} is a motivated ${job} with experience in ${skills}. 
Possesses strong knowledge and practical expertise with ${experience} experience in the industry.

=================================
`;

    setResume(output);
  };

  return (
    <div style={mainStyle}>

      <h1>AI Resume Generator</h1>

      <input
        type="text"
        placeholder="Your Name"
        style={inputStyle}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Job Title"
        style={inputStyle}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />

      <textarea
        placeholder="Skills"
        style={textareaStyle}
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <textarea
        placeholder="Experience"
        style={textareaStyle}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />

      <button
        style={buttonStyle}
        onClick={generateResume}
      >
        Generate Resume
      </button>

      {resume && (
        <div style={resultStyle}>
          <pre>{resume}</pre>
        </div>
      )}

    </div>
  );
}

const mainStyle = {
  minHeight: "100vh",
  backgroundColor: "#0f172a",
  color: "white",
  padding: "40px",
  fontFamily: "Arial"
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "20px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px"
};

const textareaStyle = {
  width: "100%",
  height: "120px",
  padding: "15px",
  marginTop: "20px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px"
};

const buttonStyle = {
  marginTop: "20px",
  padding: "15px 30px",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "18px"
};

const resultStyle = {
  backgroundColor: "#1e293b",
  marginTop: "30px",
  padding: "20px",
  borderRadius: "10px",
  whiteSpace: "pre-wrap"
};

export default Resume;