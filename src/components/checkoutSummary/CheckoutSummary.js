//// cart sayfasından checkout sayfasına ulaştığımızda sağ tarafta görünen checkout summary componenti. Proceed to checkout yaptığımızda solda tekrar görünür.
import React from 'react'
import styles from "./CheckoutSummary.module.scss"
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from '../../redux/slice/cartSlice'
import { Link } from 'react-router-dom'
import Card from '../card/Card'


const CheckoutSummary = () => {
  const cartItems=useSelector(selectCartItems)
  const cartTotalAmount=useSelector(selectCartTotalAmount)
  const cartTotalQuantity=useSelector(selectCartTotalQuantity)
  return (
     <div>
       <h3>Checkout Summary</h3>
       <div>
        {cartItems.length=== 0 ? (
          <>
           <p>No item in your cart.</p>
           <button className="--btn">
            <Link to ="/#products">Back to shop.</Link>
           </button>
          </>
        ) :(
          <div>
            <p>
              <b>{`cart item(s): ${cartTotalQuantity}`}</b>
            </p>
             <div className={styles.text}>
               <h4>Subtotal:</h4>
               <h3>{cartTotalAmount.toFixed(2)}</h3>
             </div>
              {
                cartItems.map((item,index)=>{
                  const {id,name,price,cartQuantity} =item 
                  return(
                    <Card key={id} cardClass={styles.card}>
                      <h4>Product:{name}</h4>
                      <p>Quantity:{cartQuantity}</p>
                      <p>Unit Price:{price}</p>
                       <p>set Price:{price*cartQuantity}</p>
                    </Card>
                  )
                })
              }
          </div>
        )

        }
       </div>
     </div>

  )
}

export default CheckoutSummary