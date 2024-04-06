import HeaderPage from '@/components/HeaderPage/HeaderPage';
import Reccomendation from '@/components/Reccomendation/Reccomendation';
import SingleBanner from '@/components/Single/SingleBanner/SingleBanner';
import SingleText from '@/components/Single/SingleText/SingleText';

export default function detailArticles({ params }) {
  return (
   <>
     <HeaderPage introTitle={params.articlesId} />
     <SingleBanner getImage={''} getAlt={''} />
     <SingleText getText={'Привет, мир!'} />
     <Reccomendation getData={''} />
   </>
  )
}
