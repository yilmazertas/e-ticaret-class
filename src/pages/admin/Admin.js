//// admin sayfası
import React from 'react'
import {Route,Routes} from "react-router-dom"
import styles from "./Admin.module.scss"
import Navbar from '../../components/admin/navbar/Navbar'
import Home from '../../components/admin/home/Home'
import ViewProducts from '../../components/admin/viewProducts/ViewProducts'
import AddProduct from '../../components/admin/addProduct/AddProduct'
import Orders from '../../components/admin/orders/Orders'
import OrderDetails from '../../components/admin/orderDetails/OrderDetails'
const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
       <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="all-products" element={<ViewProducts/>}/> 
          <Route path="add-products" element={<AddProduct/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="order-details" element={<OrderDetails/>}/>
        </Routes>
       </div>
    </div>
  )
}

export default Admin