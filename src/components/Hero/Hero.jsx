import Card from "../../ui/Card";
import "./Hero.css";

export default function Hero({ heroImg }) {
  return (
    <Card>
      <div className="h_container" id="home">
        <div className="hero_container">
          <img src={heroImg} alt="" />
          <div className="meta">
            <div className="date">
              <i className="fa fa-star"></i>
              18th Feb 2023
            </div>
            {/* <img src="src\assets\Vector.png" alt="" /> */}
            <div className="time">
              <i className="fa fa-star"></i>
              10:00 A.M - 5:00 P.M
            </div>
            {/* <img src="src\assets\Vector.png" alt="" /> */}
            <div className="location">
              <i className="fa fa-star"></i>
              Terna College
            </div>
          </div>
          <button className="glow-on-hover">Register Now</button>
        </div>
      </div>
    </Card>
  );
}
