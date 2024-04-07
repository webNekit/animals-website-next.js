"use client";
import react from "react";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Help from "@/components/Help/Help";
import News from "@/components/News/News";
import Pets from "@/components/Pets/Pets";
import Requisites from "@/components/Requisites/Requisites";
import Guide from "@/components/Guide/Guide";
import useNewsLimited from "@/hooks/News/useNewsLimited";
import usePopularNews from '@/hooks/News/usePopularNews';


export default function Home() {
  const postLimit = useNewsLimited();
  const postPopular = usePopularNews();

  return (
    <>
      <Banner getData={postPopular} />
      <About />
      <News getData={postLimit} />
      <Pets getData={''} />
      <Help getData={''} />
      <Guide />
      <Requisites />
    </>
  );
}
