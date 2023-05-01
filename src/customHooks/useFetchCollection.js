//// google firebase içerisinde 3 koleksiyon tutulacak: products, orders, reviews. Bu koleksiyonları toplu halde çekebilmek için bu hook kullanılacak
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../firebase/config';

const useFetchCollection = (collectionName) => {
  const [data,setData] =useState([]);
  const [isLoading,setisLoading] =useState(false)

  const getCollection = () =>{
    setisLoading(true);
     try {
      const docRef=collection(db,collectionName);
      const q = query(docRef,orderBy("createdAt","desc"))
       onSnapshot(q,(snapshot)=>{
        const allData = snapshot.docs.map((doc)=> ({
          id:doc.id,
          ...doc.data()
        }));
        setData(allData);
        setisLoading(false);
       } )
      

     }catch(error) {
      setisLoading(false);
      toast.error(error)
     }
  }

   useEffect(() =>{
    getCollection();
   },[])
  return {data,isLoading}
}

export default useFetchCollection