import Card from "../../ui/Card";
import "./Prizes.css"
import image from '../../assets/sword.png'

export default function Prizes() {
  return (
    <Card>
      <div className="prizes_container" id="prizes">
        <div className="title_container">
          <img src="src\assets\sword.png" alt="" />
          <h1>Prizes</h1>
        </div>
      <div class="temp">
          <div class="prize_container">
            <img class="image" src={image} alt="" />
            <div class="prizemoney">10,000 INR</div>
            <div class="winner">1st Runner-up</div>
          </div>
          <div class="prize_container">
            <img class="image" src={image} alt="" />
            <div class="prizemoney">15,000 INR</div>
            <div class="winner">Winner</div>
          </div>
          <div class="prize_container">
            <img class="image" src={image} alt="" />
            <div class="prizemoney">5,000 INR</div>
            <div class="winner">2nd Runner-up</div>
          </div>
        </div>
        <div className="meta">
          <i>//More prizes for the top-3 teams are to be added above and additonal sponsored prizes will be announced soon...</i>
        </div>
      </div>
    </Card>
  );
}



