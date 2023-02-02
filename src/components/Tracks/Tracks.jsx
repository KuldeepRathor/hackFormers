import Card from "../../ui/Card";
import "./Tracks.css";

export default function Tracks() {
  return (
    <Card>
      <div className="tracks_container" id="tracks">
        <div className="title_container">
          <img src="src\assets\sword.png" alt="" />
          <h1>tracks</h1>
        </div>
        <div className="first-row">
          <div className="boxes">
            <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>
            <div className="topic">Web / App Dev</div>
            <div className="content">
              Develop Mobile/Web apps featuring the world of Transformers.
            </div>
          </div>
          <div className="boxes">
            <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>
            <div className="topic">AI & ML </div>
            <div className="content">
              Use cutting-edge AI and ML technologies to create a new generation
              of transformers
            </div>
          </div>
          <div className="boxes">
            <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>
            <div className="topic">Game (AR/VR)</div>
            <div className="content">
              Immerse yourself in the world of transformers by creating
              Games(AR/VR)
            </div>
          </div>
          <div className="boxes span">
            <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>
            <div className="flip-content" onMouseOver="flipFunction">
              <div className="topic">WEB 3.0</div>
              <div className="content">
                Explore the potential of Blockchain technology to bring
                transformers to the next level
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
