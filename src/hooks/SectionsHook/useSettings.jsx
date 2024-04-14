"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSettings = () => {
    const [settingsData, setSettingsData] = useState([]);
    
    useEffect(() => {
       getDetailSettings();
    }, [])
    
    const getDetailSettings = () => {
       axiosClient.get("/setting?populate[0]=socials.socialLogo&populate[1]=contacts&populate[2]=siteLogo").then(resp => {
          setSettingsData(resp.data.data);
       }).catch(error => {
          console.log("Ошибка получения данных", error)
       });
    };
    
    return settingsData;
}

export default useSettings
