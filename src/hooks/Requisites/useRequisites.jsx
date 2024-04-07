"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useRequisites = () => {

    const [requisitesList, setRequisitesList]  = useState([]);

    useEffect(() => {
        getRequisites();
    }, [])

 const getRequisites = () => {
    axiosClient.get("/requisites?populate=*").then(resp => {
        setRequisitesList(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
 };

 return requisitesList;
}

export default useRequisites
