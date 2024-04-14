"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useHelp = () => {
    const [helpData, setHelpData] = useState([]);
    
    useEffect(() => {
       getHelpData();
    }, [])
    
    const getHelpData = () => {
       axiosClient.get("/helpsection?populate=*").then(resp => {
          setHelpData(resp.data.data);
       }).catch(error => {
          console.log("Ошибка получения данных", error)
       });
    };
    
    return helpData;
}

export default useHelp
