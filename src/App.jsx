import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Schedule from "./components/Schedule/Schedule";
import Prizes from "./components/Prizes/Prizes";
import Sponsors from "./components/Sponsors/Sponsors";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <Schedule></Schedule>
      <Prizes></Prizes>
      <Sponsors></Sponsors>
      <Faq></Faq>
    </div>
  );
}

export default App;
