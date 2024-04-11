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
import useLimitPits from "@/hooks/Pets/useLimitPits";
import useLimitGuides from "@/hooks/Guides/useLimitGuides";
import useAbout from "@/hooks/SectionsHook/useAbout";


export default function Home() {
  const postLimit = useNewsLimited();
  const postPopular = usePopularNews();
  const petsData = useLimitPits();
  const guidesData = useLimitGuides(4);
  const aboutData = useAbout();
  return (
    <>
      <Banner getData={postPopular} />
      <About sectionData={aboutData} />
      <News getData={postLimit} />
      <Pets getData={petsData} />
      <Help getData={''} />
      <Guide getData={guidesData} />
      <Requisites />
    </>
  );
}
