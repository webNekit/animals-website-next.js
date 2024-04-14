"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useReports = () => {

    const [ reportsData, setReportsData ] = useState([]);

    useEffect(() => {
        getReports();
    }, [])

    const getReports = () => {
        axiosClient.get("/reports?sort[0]=id:desc&populate=*").then(resp => {
            setReportsData(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error)
        });
    };

    return reportsData;
}

export default useReports;
