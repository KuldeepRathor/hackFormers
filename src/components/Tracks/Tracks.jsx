import Card from "../../ui/Card";
import "./Tracks.css";

export default function Tracks({tracks}) {
  return (
    <Card>
      <div className="tracks_container" id="tracks">
        <div className="title_container">
          <img src="src\assets\sword.png" alt="" />
          <h1>tracks</h1>
        </div>
        <div className="first-row">
          {tracks.map(track=>{
            return(
          <div className="boxes">
            <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>
            <div className="topic">{track.title}</div>
            <div className="tracks_content">{track.content}</div>
          </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
