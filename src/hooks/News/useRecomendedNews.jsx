"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useRecomendedNews = (slug) => {

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        recomendedPost();
    }, [])

  const recomendedPost = () => {
    axiosClient.get("/posts?filters[isRecomended][$in]=true&filters[slug][$nei]=" + slug + "&sort[0]=id:desc&populate=*").then(resp => {
        setPostData(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  };
  return postData;
}

export default useRecomendedNews
