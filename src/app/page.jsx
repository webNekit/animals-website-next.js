"use client";
import react from "react";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Help from "@/components/Help/Help";
import News from "@/components/News/News";
import Pets from "@/components/Pets/Pets";
import Requisites from "@/components/Requisites/Requisites";
import Guide from "@/components/Guide/Guide";


export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <News getData={''} />
      <Pets getData={''} />
      <Help getData={''} />
      <Guide />
      <Requisites />
    </>
  );
}
