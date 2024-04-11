"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useVariant = () => {
 const [variantData, setVariantData] = useState([]);
 
 useEffect(() => {
    getVariants();
 }, [])
 
 const getVariants = () => {
    axiosClient.get("/variant?populate=*").then(resp => {
       console.log(resp.data.data);
       setVariantData(resp.data.data);
    }).catch(error => {
       console.log("Ошибка получения данных", error)
    });
 };
 
 return variantData;
}

export default useVariant
