"use client";
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import Reccomendation from '@/components/Reccomendation/Reccomendation';
import SingleBanner from '@/components/Single/SingleBanner/SingleBanner';
import SingleCkeditor from '@/components/Single/SingleCkeditor/SingleCkeditor';
import SingleGallery from '@/components/Single/SingleGallery/SingleGallery';
import SingleText from '@/components/Single/SingleText/SingleText';
import useRecomendedNews from '@/hooks/News/useRecomendedNews';
import useSingleNews from '@/hooks/News/useSingleNews';

export default function detailArticles({ params }) {

  const postDetail = useSingleNews(params.articlesId);
  const postRecomended = useRecomendedNews(params.articlesId);

  return (
   <>
     <HeaderPage introTitle={postDetail.attributes?.postName} />
     <SingleText getText={postDetail.attributes?.smallText} />
     <SingleBanner getImage={process.env.NEXT_PUBLIC_STRAPI_API_URL + (postDetail?.attributes?.postImage?.data.attributes?.url ?? '')} getAlt={''} />
     <SingleCkeditor getText={postDetail.attributes?.longText} />
     <SingleGallery getImage={postDetail} />
     <Reccomendation getData={postRecomended} />
   </>
  )
}
