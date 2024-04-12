"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useGuide = () => {
  const [guideData, setGuideData] = useState([]);
  
  useEffect(() => {
     getGuideData();
  }, [])
  
  const getGuideData = () => {
     axiosClient.get("/guidesection?populate=*").then(resp => {
        console.log(resp.data.data);
        setGuideData(resp.data.data);
     }).catch(error => {
        console.log("Ошибка получения данных", error)
     });
  };
  
  return guideData;
}

export default useGuide
