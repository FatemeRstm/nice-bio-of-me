import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar title="title" image="photo.jpg" />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} alt={props.title} />;
}

function Intro() {
  return (
    <div>
      <h1>Fateme Rostami</h1>
      <p>
        My name is Fati Rostami and I was born on February 9, 1999 I graduated
        in Software Technology Engineering Right now I'm an intern and learning
        front-end development I have some experience with programming I did
        basic exercises in C++ during my first university term I worked with C#
        in console apps Windows Forms and WPF I learned Java but never practiced
        coding with it I wrote simple Python programs like checking if a number
        is even or odd I built an ASP NET MVC project by following a tutorial
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skillList">
      <Skill skillName="React " emoji="👍" color="#123456" />
      <Skill skillName="Html+CSS " emoji="✨" color="orangered" />
      <Skill skillName="JavaScript" emoji="😉" color="yellow" />
      <Skill skillName="Git+GitHub" emoji="🙌" color="gray" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
