"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useNews = () => {

    const [ postData, setPostData ] = useState([]);
    const [ pageSize, setPageSize ] = useState(6);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        getPosts();
    }, [pageSize])

  const getPosts = () => {
    setIsLoading(true);
    axiosClient.get("/posts?sort[0]=id:desc&pagination[pageSize]=" +pageSize+ "&populate=*").then(resp => {
        setPostData(resp.data.data);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    }).finally(() => {
      setIsLoading(false);
    });
  }
  return { postData, setPageSize, isLoading };
}

export default useNews