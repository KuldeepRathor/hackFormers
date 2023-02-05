import Card from "../../ui/Card";
import "./Faq.css";
import { useState } from "react";
import { questions } from "../../utils/Questions";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <Card>
      <div className="faq_container" id="faq">
        {/* <img src={sword}/>
      <h1 className="heading"></h1> */}
        <div className="title_container">
          <img src="src\assets\sword.png" alt="" />
          <h1>Agenda</h1>
        </div>
        <div className="wrapper">
          <div className="accordion">
            {questions.map((item, i) => (
              <div className="item" onClick={() => toggle(i)}>
                <div className="title">
                  <h2>{item.question}</h2>
                  <span>{selected === i ? "✖" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Faq;
