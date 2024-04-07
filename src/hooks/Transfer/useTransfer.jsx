"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useTransfer = () => {

    const [transferList, setTransferList] = useState([]);

    useEffect(() => {
        getTransfer();
    },[])

  const getTransfer = () => {
    axiosClient.get("/transfers?populate=*").then(resp => {
        console.log(resp.data.data);
        setTransferList(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  };

  return transferList;

}

export default useTransfer
