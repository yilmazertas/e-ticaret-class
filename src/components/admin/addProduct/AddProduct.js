//// admin panelindeki add product componenti
import React, { useState } from 'react'
import styles from "./AddProduct.module.scss"
import Card from  "../../card/Card"
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import {db, storage} from "../../../firebase/config"
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, } from 'firebase/firestore';
import Loader from "../../loader/Loader"
import { useNavigate } from 'react-router-dom';

const categories=[
  {id:1,name:"Laptop"},
  {id:2,name:"Electronics"},
  {id:3,name:"Fashion"},
  {id:4,name:"Phone"}
]
const AddProduct = () => {
  const initialState = {
    name:"",
    imageURL:"",
    price:0,
    category:"",
    brand:"",
    desc:"",
  }
  const [product,setProduct]=useState({
    ...initialState

  })
   
  const [uploadProgress,setUploadProgress]=useState(0)
   const [isLoading,setIsloading] =useState(false)

   const navigate = useNavigate();
  const handleInputChange = (e) => {
    const {name,value} =e.target;
      setProduct({...product,[name] : value})
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    // console.log(file)

    const storageRef=ref(storage,`eshop/${Date.now()}${file.name}`)
    const uploadTask=uploadBytesResumable(storageRef,file)



    uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setUploadProgress(progress)
    
  }, 
  (error) => {
    toast.error(error.massege)
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setProduct({...product,imageURL : downloadURL})
      toast.success("image upload successfully.")
    });
  }
);
  };
   
  const addProduct=(e) =>{
    e.preventDefault();
    // console.log(product)
      setIsloading(true)
     try{
      addDoc(collection(db,"products"),{
       name:product.name,
       imageURL:product.imageURL,
       price:Number(product.price),
       category:product.brand,
       desc:product.desc,
       createdAt:Timestamp.now().toDate()

      })
      setIsloading(false)
      setUploadProgress(0)
      setProduct(...initialState)
      toast.success("Product uploaded successfully")
      navigate("/admin/all-products")
     } 
     catch(error) {
      setIsloading(false)
      toast.error(error.massage)
     }
  }
  return (
    <>
     {isLoading && <Loader/>}
    <div className={styles.product}>
      <h2>Add New Product</h2>
      <Card cardClass={styles.card}>
        <form onSubmit={addProduct}>
           <label>Product name:</label>
           <input type="text" placeholder="Product name" required name="name" value={product.name} onChange={(e)=>
           handleInputChange(e)}/>
           <label>Product image:</label>
           <Card cardClass={styles.group}>
              {uploadProgress=== 0 ? null :(<div className={styles.progress} >
                 <div className={styles["progress-bar"]} style={{width:`${uploadProgress}%`}}>{uploadProgress < 100 ? `Uploading ${uploadProgress}%` : `Upload Complete ${uploadProgress}%`}
                 </div>
              </div>)}
              <input type="file" accept="image/*"
              placeholder="Product Image" name="image" onChange={(e)=>handleImageChange(e)
              }/>
               {product.imageURL === "" ? null : <input type="text" 
                required 
               value={product.imageURL}
               placeholder="Image URL" name="imageURL" disabled/>}
           </Card>
            <label>Product Price:</label>
              <input type="number" placeholder="Product Price" required name="price" value={product.price} onChange={(e)=>handleInputChange(e)}/>
              <label>Product Category:</label>
               <select required name="category" value={product.category} onChange ={(e)=>handleInputChange(e)}>
                <option value ="" disabled>
                  --choose product category--
                </option>
                {categories.map((cat)=>{
                  return (
                    <option key={cat.id} value=
                    {cat.name}>
                    {cat.name}
                    </option>
                  )
                })}
               </select>
                <label>Product Company/Brand:</label>
                  <input type="text" placeholder="Product brand" required name="brand" value={product.brand} onChange={(e)=>handleInputChange(e)}/>
                <label>Product Description:</label>
                <textarea name="desc" value={product.desc} onChange={(e)=>handleInputChange(e)} cols="30" rows="10"></textarea>
                 <button className="--btn --btn-primary">Save Product</button>
        </form>
      </Card>
    </div>
    </>
  )
}

export default AddProduct