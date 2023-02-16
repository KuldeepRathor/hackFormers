import Card from "../../ui/Card";
import { schedule } from "../../utils/Schedule";
import Sched from "./Sched";
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
          {schedule.map(s=>{
            return(
              <Sched name={s.name} time={s.time} howlong={s.howLong}/>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
