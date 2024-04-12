import { axiosClient } from '@/utils/GlobalApi';
import React, {useEffect, useState} from 'react'

const useRequisites = () => {
    const [reqData, setReqData] = useState([]);
    
    useEffect(() => {
       getReqDetail();
    }, [])
    
    const getReqDetail = () => {
       axiosClient.get("/reqsection?populate=*").then(resp => {
          console.log(resp.data.data);
          setReqData(resp.data.data);
       }).catch(error => {
          console.log("Ошибка получения данных", error)
       });
    };
    
    return reqData;
}

export default useRequisites
