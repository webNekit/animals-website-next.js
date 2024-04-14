"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useGuides = () => {
  const [guidesData, setGuidesData] = useState([]);
  
  useEffect(() => {
      getGuides();
  }, []);
  
  const getGuides = () => {
      axiosClient.get("/guides?sort[0]=id:desc&populate[0]=content.image").then((resp) => {
              setGuidesData(resp.data.data);
          }).catch((error) => {
              console.log("Ошибка получения данных", error);
          });
  };
  
  return guidesData; 
}
export default useGuides
