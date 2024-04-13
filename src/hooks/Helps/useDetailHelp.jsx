"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useDetailHelp = (slug) => {
    const [helpDetailData, setHelpDetailData] = useState([]);
    
    useEffect(() => {
       getDetailHelp();
    }, [slug])
    
    const getDetailHelp = () => {
       axiosClient.get("helps?filters[slug][$eqi]=" + slug + "&populate=content.image").then(resp => {
          console.log(resp.data.data[0]);
          setHelpDetailData(resp.data.data[0]);
       }).catch(error => {
          console.log("Ошибка получения данных", error)
       });
    };
    
    return helpDetailData;
}

export default useDetailHelp
