"use client";
import { axiosClient } from '@/utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const useSinglePets = (id) => {

    const [ dataPets, setDataPets ] = useState(id);

    useEffect(() => {
        singlePets();
    }, [id])

    const singlePets = () => {
        axiosClient.get("/pets/" + id + "?populate=*").then(resp => {
            setDataPets(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error)
        });
    };

    return dataPets;
}

export default useSinglePets