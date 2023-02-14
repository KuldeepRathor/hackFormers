import Hero from "../components/Hero/Hero";
import Schedule from "../components/Schedule/Schedule";
import Prizes from "../components/Prizes/Prizes";
import Sponsors from "../components/Sponsors/Sponsors";
import Faq from "../components/Faq/Faq";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import {hackformersAbout} from "../utils/about";
import {HackFormersTracks} from "../utils/tracks";

export default function HackFormers() {
  const links = [
    "home",
    "about",
    "tracks",
    "sponsors",
    "schedule",
    "prizes",
    "faq",
    "Avalon",
    "Prodigy"
  ];
  return (
    <>
      <NavBar links={links} logo={"src/assets/Logo.png"}></NavBar>
      <Hero heroImg={"src/assets/Frame 1.png"}></Hero>
      <About about={hackformersAbout}></About>
      <Tracks tracks={HackFormersTracks}></Tracks>
      <Sponsors></Sponsors>
      <Schedule></Schedule>
      <Prizes></Prizes>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
