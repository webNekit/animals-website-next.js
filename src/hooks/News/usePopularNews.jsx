"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const usePopularNews = () => {

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        populatePost();
    }, [])

    const populatePost = () => {
        axiosClient.get("/posts?filters[isBanner][$in]=true&populate=*").then(resp => {
            setPostData(resp.data.data);
        }).catch(error => {
            console.log("Ошибка получения данных", error)
        });
    };

    return postData;
}

export default usePopularNews
