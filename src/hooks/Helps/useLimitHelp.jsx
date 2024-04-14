"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useLimitHelp = () => {
  const [helpLimitData, setHelpLimitData] = useState([]);
  
  useEffect(() => {
     getLimitHelp();
  }, [])
  
  const getLimitHelp = () => {
     axiosClient.get("helps?sort[0]=id:desc&pagination[pageSize]=6&populate=content.image").then(resp => {
        setHelpLimitData(resp.data.data);
     }).catch(error => {
        console.log("Ошибка получения данных", error)
     });
  };
  
  return helpLimitData;
}

export default useLimitHelp
