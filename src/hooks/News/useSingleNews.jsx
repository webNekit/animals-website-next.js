"use client";
import { axiosClient } from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useSingleNews = (slug) => {

    const [ singlePost, setSinglePost ] = useState([]);

    useEffect(() => {
        detailPost();
    }, [slug])

  const detailPost = () => {
    axiosClient.get('/posts?filters[slug][$eqi]=' + slug + '&populate=*').then(resp => {
        setSinglePost(resp.data.data[0]);
    }).catch(error => {
        console.log("Ошибка получения данных", error)
    });
  }

  return singlePost;

}

export default useSingleNews