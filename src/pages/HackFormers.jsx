import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Schedule from "../components/Schedule/Schedule";
import Prizes from "../components/Prizes/Prizes";
import Sponsors from "../components/Sponsors/Sponsors";
import Faq from "../components/Faq/Faq";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "../components/NavBar/NavBar";

export default function HackFormers() {
  const links = [
    "home",
    "tracks",
    "sponsors",
    "schedule",
    "prizes",
    "faq",
    "Avalon",
  ];
  return (
    <>
      <NavBar links={links} logo={"src/assets/Logo.png"}></NavBar>
      <Hero heroImg={"src/assets/Frame 1.png"}></Hero>
      <Tracks></Tracks>
      <Sponsors></Sponsors>
      <About></About>
      <Schedule></Schedule>
      <Prizes></Prizes>
      <Faq></Faq>
    </>
  );
}
