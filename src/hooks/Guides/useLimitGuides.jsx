"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useLimitGuides = (count) => {

    const [guidesData, setGuidesData] = useState([]);

    useEffect(() => {
        getLimitGuides();
    }, [])

  const getLimitGuides = () => {
    axiosClient.get("/guides?sort[0]=id:desc&pagination[pageSize]=" + count + "&populate[0]=content.image").then(resp => {
        console.log(resp.data.data);
        setGuidesData(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  };

  return guidesData;

}

export default useLimitGuides;
