import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    text: "SQL",
    skillLevel: 3,
    bcolor: "red",
    fcolor: "white",
  },
  {
    text: "React",
    skillLevel: 1,
    bcolor: "skyblue",
    fcolor: "black",
  },
  {
    text: "HTML",
    skillLevel: 2,
    bcolor: "orange",
    fcolor: "black",
  },
  {
    text: "CSS",
    skillLevel: 1,
    bcolor: "orangered",
    fcolor: "white",
  },
  {
    text: "Java(Script)",
    skillLevel: 1,
    bcolor: "seagreen",
    fcolor: "white",
  },
  {
    text: "Git(hub)",
    skillLevel: 2,
    bcolor: "purple",
    fcolor: "white",
  },
];

const skillEmoji = "💪";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Mashius Taterbeard</h1>
      <p>
        I like a to throw the thing things. I like a to throw the thing things.
        If I can throw it, I can know it. And if I know it, I can throw it.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <ul className="skill-list">
        {skills.map((skill) => (
          <Skill skillObj={skill} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ skillObj }) {
  const style = { backgroundColor: skillObj.bcolor, color: skillObj.fcolor };
  return (
    <li style={style} className="skill">
      {skillObj.text} <span>{skillEmoji.repeat(skillObj.skillLevel)}</span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
