import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { id: 1, skill: "HTML", level: "advanced", color: "#542389" },
  { id: 2, skill: "CSS", level: "advanced", color: "#859323" },
  { id: 3, skill: "JS", level: "", color: "#187562" },
  { id: 4, skill: "REACT", level: "beginner", color: "#904312" },
  { id: 5, skill: "NEXTJS", level: "advanced", color: "#548432" },
  { id: 6, skill: "WORDPRESS", level: "master", color: "#537821" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/photo01.webp" alt="profilo" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Curabitur blandit</h1>
      <p>
        Aliquam erat volutpat. Suspendisse non nisl sit amet velit hendrerit
        rutrum. Morbi mattis ullamcorper velit. Fusce neque. Nam pretium turpis
        et arcu.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className="skill"
          style={{ backgroundColor: skill.color }}
        >
          {skill.skill}
          {skill.level === "advanced"
            ? " 👍"
            : skill.level === "beginner"
            ? " 👀"
            : skill.level === "master"
            ? " 😎"
            : " ❌"}
        </li>
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
