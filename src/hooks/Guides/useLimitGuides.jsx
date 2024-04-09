"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useLimitGuides = () => {

    const [guidesData, setGuidesData] = useState([]);

    useEffect(() => {
        getLimitGuides();
    }, [])

  const getLimitGuides = () => {
    axiosClient.get("api/guides?sord[0]=id:desc&pagination[pageSize]=4&populate[0]=content.image").then(resp => {
        console.log(resp.data.data);
        setGuidesData(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  };

  return guidesData;

}

export default useLimitGuides
