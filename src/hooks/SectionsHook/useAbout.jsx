import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useAbout = () => {

    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        getAboutData();
    }, [])

  const getAboutData = () => {
    axiosClient.get('/about?populate=images.images').then(resp => {
        console.log(resp.data.data);
        setAboutData(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  };

  return aboutData;

}

export default useAbout
