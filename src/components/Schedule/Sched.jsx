import "./Schedule.css";


export default function Sched({name,time,howlong}){
    return(
        <>
        <div className="P1">
        <div className=" P2">
          <h2>{time}</h2>
          <h4>{howlong}</h4>
        </div>
        <div className="P3">
          <h3>{name}</h3>
        </div>
      </div>
      <br />
          <hr></hr>
          <br />
        </>
      
    );
}