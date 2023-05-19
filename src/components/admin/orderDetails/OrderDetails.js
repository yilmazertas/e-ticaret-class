////admin panelindeki orders componentinin içindeki order statusa tıklayınce çıkam order details componenti
import React, { useEffect, useState } from 'react'
import styles from "./OrderDetails.module.scss"
import spinnerImg from "../../../assets/spinner.gif"
import { Link, useParams } from 'react-router-dom'
import useFetchDocument from '../../../customHooks/useFetchDocument'
import ChangeOrderStatus from '../changeOrderStatus/ChangeOrderStatus'


const OrderDetails = () => {
  const [order,setOrder] =useState(null)
  const {id} =useParams();
  const document =useFetchDocument("orders",id)

  useEffect(()=>{
    setOrder(document)
  },[document])

  return (
    <>
      <div className={styles.table}>
        <h2>Order Details</h2>
        <div>
          <Link to="/admin/orders">&larr;Back to Orders</Link>
          <br/>
          {order === null ? (
            <img src={spinnerImg} alt="Loading.." style={{width:"50px"}}/>
          ) :(
            <>
            <p> 
              <b>Order ID</b> {order.id}
            </p>
            <p>
              <b>Order Amount</b> ${order.orderAmount} 
            </p>
             <p>
              <b>Order Status</b> {order.orderStatus}
             </p>
             <p>
              <b>Shipping Address</b>
              <br/>
              Address: {order.shippingAddress.line1},{order.shippingAddress.line2},{order.shippingAddress.city}
              <br/>
              State: {order.shippingAddress.state}
              <br/>
               Country:{order.shippingAddress.country}
             </p>
             <br/>

             <table>
               <thead>
                 <tr>
                   <th>s/n</th>
                   <th>product</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Total</th>
                 </tr>
               </thead>
               <tbody>
                {order.cartItems.map((item,index)=>{
                  const {id,name,price,imageURL,cartQuantity} =item;
                  return(
                    <tr key={id}>
                      <td>
                        <b>{index+1}</b>
                      </td>
                      <td>
                        <p>
                           <b>{name}</b>
                        </p>
                        <img src={imageURL} alt={name} style={{width:"100px"}}/>

                      </td>
                      <td>{price}</td>
                      <td>{cartQuantity}</td>
                      <td>{(price*cartQuantity).toFixed(2)}</td>
                    </tr>
                  )
                })}
               </tbody>
             </table>
            </>
          )}
        </div>
        <ChangeOrderStatus order ={order} id={id} />
      </div> 
    </>
  )
}

export default OrderDetails