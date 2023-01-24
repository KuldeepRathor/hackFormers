import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Schedule from "./components/Schedule/Schedule";
import Prizes from "./components/Prizes/Prizes";
import Sponsors from "./components/Sponsors/Sponsors";
import Faq from "./components/Faq/Faq";
import Tracks from "./components/Tracks/Tracks";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Tracks></Tracks>
      <About></About>
      <Schedule></Schedule>
      <Prizes></Prizes>
      <Sponsors></Sponsors>
      <Faq></Faq>
    </div>
  );
}

export default App;
