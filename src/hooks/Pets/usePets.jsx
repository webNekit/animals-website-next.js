"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const usePets = (statusName) => {

    const [petsData, setPetsData] = useState([]);
    
    useEffect(() => {
        getPets();
    }, [statusName])

    const getPets = () => {
        // /pets?sort[0]=id:desc&populate=*
        const statusParam = statusName ? "&filters[status_id][id][$in]=" + statusName : "";
        axiosClient.get("/pets?pagination[pageSize]=6&sort[0]=id:desc" + statusParam + "&populate=*").then(resp => {
            setPetsData(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error)
        });
    };

    return petsData;
}

export default usePets