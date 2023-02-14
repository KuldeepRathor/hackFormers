import Card from "../../ui/Card";
import "./About.css";

export default function About({about}) {
  return (
    <Card>
      <div className="about_container" id="about">
        <div className="title_container">
          <img src="src\assets\sword.png" alt="" />
          <h1>about</h1>
        </div>
        <div className="about_content">
          <p>{about}</p>
        </div>
      </div>
    </Card>
  );
}

