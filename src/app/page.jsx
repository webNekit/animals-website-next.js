import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Help from "@/components/Help/Help";
import News from "@/components/News/News";
import Pets from "@/components/Pets/Pets";
import react from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Help />
      <Pets />
      <News />
    </>
  );
}
