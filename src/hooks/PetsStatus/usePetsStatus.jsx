"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const usePetsStatus = () => {

    const [petsStatusData, setPetsStatusData] = useState([]);

    useEffect(() => {
        getPetsStatus();
    }, [])

    const getPetsStatus = () => {
        axiosClient.get("/status-pets?populate=*").then(resp => {
            setPetsStatusData(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error)
        });
    };

    return petsStatusData;
}

export default usePetsStatus;
