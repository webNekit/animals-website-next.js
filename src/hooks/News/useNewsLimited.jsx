"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useNewsLimited = () => {
    const [ postData, setPostData ] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

  const getPosts = () => {
    axiosClient.get("/posts?pagination[pageSize]=6&sort[0]=id:desc&populate=*").then(resp => {
        setPostData(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  }
  return postData;
}

export default useNewsLimited
