import Card from "../../ui/Card";
import "./Tracks.css";
import { motion } from "framer-motion";


export default function Tracks() {
function flipFunction(){
  content  = document.querySelector('.flip-content'),
  content.style.display = "block"
}
  return (
    <Card>
      <div className="container">
      <div className="title_container">
        <img src="src\assets\sword.png" alt="" />
        <h1>Tracks</h1>
      </div>
      
      <section>
        {/* first row */}
        <div className="first-row">
      
          <div className="boxes">
            
            <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>

            <div className="topic">AI & ML</div>
            
            <div className="content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>

            <div className="back-content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>

          

          <div className="boxes">
          <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>

            <div className="topic">AI & ML</div>

            <div className="content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>

          <div className="boxes">
          <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>

            <div className="topic">AI & ML</div>

            <div className="content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
       
        

        {/* second row */}
        <div className="first-row">
          <div className="boxes">
          <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>
       <div className="flip-content"  onMouseOver="flipFunction">
            <div className="topic">AI & ML</div>
        <div className="content">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </div>
        </div>
           
          </div>

          <div className="boxes">
            
          <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>

            <div className="topic">AI & ML</div>

            <div className="content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>

          <div className="boxes">
          <div className="svgHolder">
              <img className="svg" src="src\assets\sword.png" alt="" />
            </div>

            <div className="topic">AI & ML</div>

            <div className="content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>

{/* w3schools */}
{/* <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"/>
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div> */}


      </section>
      </div>
    </Card>
  );
}
