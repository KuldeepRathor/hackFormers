import Card from "../../ui/Card";
import "./Schedule.css";

export default function Schedule() {
  return (
    <Card>
      <div className="schedule_container" id="schedule">
        <div className="title_container">
          <img src="src\assets\sword.png" alt="" />
          <h1>Agenda</h1>
        </div>
        <div className="schedule_cont">
          <div className="P1">
            <div className=" P2">
              <h2>10:00 AM </h2>
              <h4>60 MINS</h4>
            </div>
            <div className="P3">
              <h3>CHECK IN</h3>
            </div>
          </div>
          <br />
          <hr></hr>
          <br />
          <div className="P1">
            <div className=" P2">
              <h2>11:00 AM </h2>
              <h4>15 MINS</h4>
            </div>
            <div className="P3">
              <h3>WELCOME & INTRODUCTION</h3>
              <h6>NAME</h6>
            </div>
          </div>
          <br />
          <hr></hr>
          <br />
          <div className="P1">
            <div className=" P2">
              <h2>11:15 AM </h2>
              <h4>15 MINS</h4>
            </div>
            <div className="P3">
              <h3>ABOUT HACKTOBERFEST</h3>
              <h6>NAME</h6>
            </div>
          </div>
          <br />
          <hr></hr>

          <br />
          <div className="P1">
            <div className=" P2">
              <h2>11:30 AM </h2>
              <h4>15 MINS</h4>
            </div>
            <div className="P3">
              <h3>INTRO TO OPEN SOURCE</h3>
              <h6>NAME</h6>
            </div>
          </div>

          <br />
          <hr></hr>
          <br />
          <div className="P1">
            <div className=" P2">
              <h2>11:45 AM </h2>
              <h4>45 MINS</h4>
            </div>
            <div className="P3">
              <h3>GIT & GITHUB</h3>
              <h6>NAME</h6>
            </div>
          </div>

          <br />
          <hr></hr>
          <br />
          <div className="P1">
            <div className=" P2">
              <h2>12:30 PM </h2>
              <h4>90 MINS</h4>
            </div>
            <div className="P3">
              <h3> LUNCH & NETOWORKING</h3>
            </div>
          </div>

          <br />
          <hr></hr>
          <br />
          <div className="P1">
            <div className=" P2">
              <h2>02:00 PM </h2>
              <h4>25 MINS</h4>
            </div>
            <div className="P3">
              <h3>SESSION TITLE</h3>
              <h6>NAME</h6>
            </div>
          </div>
          <br />
          <hr></hr>
        </div>
      </div>
    </Card>
  );
}
