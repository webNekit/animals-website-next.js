"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useLimitPits = () => {

    const [petsData, setPetsData] = useState([]);

    useEffect(() => {
        getPets();
    }, [])

  const getPets = () => {
    axiosClient.get("/pets?pagination[pageSize]=6&sort[0]=id:desc&populate=*").then(resp => {
        console.log(resp.data.data);
        setPetsData(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  };

  return petsData;

}

export default useLimitPits
