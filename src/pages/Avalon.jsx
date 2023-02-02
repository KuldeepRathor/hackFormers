import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";

export default function Avalon() {
  const links = ["home", "Hackformers"];
  return (
    <>
      <NavBar links={links} logo={"src/assets/Avalon.png"}></NavBar>
      <Hero heroImg={"src/assets/AvalonHero.png"}></Hero>
    </>
  );
}
