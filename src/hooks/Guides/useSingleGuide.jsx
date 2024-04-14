"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useSingleGuide = (slug) => {
 const [singleData, setSingleData] = useState(slug);
 
 useEffect(() => {
     getSingleGuide();
 }, [slug]);
 
 const getSingleGuide = () => {
     axiosClient.get("/guides?filters[slug]=" + slug + "&populate[0]=content.image").then((resp) => {
             setSingleData(resp.data.data[0]);
         }).catch((error) => {
             console.log("Ошибка получения данных", error);
         });
 };
 
 return singleData;
 
}

export default useSingleGuide;
