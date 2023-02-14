import Hero from "../components/Hero/Hero";
import Schedule from "../components/Schedule/Schedule";
import Prizes from "../components/Prizes/Prizes";
import Sponsors from "../components/Sponsors/Sponsors";
import Faq from "../components/Faq/Faq";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import { ProdigyAbout } from "../utils/about";
import { ProdigyTracks } from "../utils/tracks";

export default function Prodigy() {
  const links = [
    "home",
    "about",
    "tracks",
    "sponsors",
    "prizes",
    "faq",
    "Avalon",
    "Hackformers",
  ];
  return (
    <>
      <NavBar links={links} logo={"src/assets/Frame 30.png"}></NavBar>
      <Hero heroImg={"src/assets/Frame 30.png"}></Hero>
      <About about={ProdigyAbout}></About>
      <Tracks tracks={ProdigyTracks}></Tracks>
      <Sponsors></Sponsors>
      <Prizes></Prizes>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
