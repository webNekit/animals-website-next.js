"use client";
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import SingleBanner from '@/components/Single/SingleBanner/SingleBanner';
import SingleGallery from '@/components/Single/SingleGallery/SingleGallery';
import SingleInfo from '@/components/Single/SingleInfo/SingleInfo';
import SingleText from '@/components/Single/SingleText/SingleText';
import useSinglePets from '@/hooks/Pets/useSinglePets';

export default function petsDetail({ params }) {

  const petsData = useSinglePets(params.petsId)

  return (
    <>
        <HeaderPage introTitle={petsData.attributes?.name} />
        <SingleInfo getData={petsData.attributes?.breed + ", " + petsData.attributes?.gender + ", " + petsData.attributes?.age + " год(а)"} />
        <SingleText getText={petsData.attributes?.smallText} />
        <SingleBanner getImage={process.env.NEXT_PUBLIC_STRAPI_API_URL + (petsData?.attributes?.image?.data.attributes?.url ?? '')} getAlt={''} />
        <SingleText getText={petsData.attributes?.longtText} />
        <SingleGallery getImage={petsData} />
    </>
  )
}
