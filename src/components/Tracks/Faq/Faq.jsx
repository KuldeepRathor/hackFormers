import Card from "../../ui/Card";
import "./Faq.css";
import sword from "./sword.png";
import { useState } from "react";

function Faq() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <Card>
      {/* <img src={sword}/>
      <h1 className="heading">FAQs</h1> */}
      <div class="parent">
        <div class="child">
          <img src={sword} />
        </div>
        <div class="child">
          <h1 className="heading">FAQs</h1>
        </div>
      </div>
      <div className="wrapper">
        <div className="accordion">
              {data.map((item,i)=>(
                <div className="item" onClick={() => toggle(i)}>
                  <div className="title">
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '✖' : '+'}</span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                </div>
              ))}
        </div>
      </div>
    </Card>
  );
}

const data = [
  {
    question: 'Question 1',
    answer:
    'flksdfl;jsd;fjsdkffjsdkfsdklfjsdkfjklsfjklsfjksjfksfj',
  },
  {
    question: 'Question 2',
    answer:
    'flksdfl;jsd;fjsdkffjsdkfsdklfjsdkfjklsfjklsfjksjfksfj',
  },
]

export default Faq;