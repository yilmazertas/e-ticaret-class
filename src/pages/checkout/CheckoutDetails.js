//// bu sayfa cart sayfasından checkout a tıkladığımızda gelen, checkoutdetails componentidir. içinde adres inputları ve checkoutsummary yer alır.
import React, { useState } from 'react'
import styles from "./CheckoutDetails.module.scss"
import Card from '../../components/card/Card'
import { CountryDropdown} from "react-country-region-selector"
import { useDispatch } from 'react-redux'
import { SAVE_BILLING_ADDRESS, SAVE_SHIPPING_ADDRESS } from '../../redux/slice/checkoutSlice'
import { useNavigate } from 'react-router-dom'
import CheckoutSummary from '../../components/checkoutSummary/CheckoutSummary'
const initialAddressState={
  name:"",
  line1:"",
  line2:"",
  city:"",
  state:"",
  postal_code:"",
  country:"",
  phone:""
}

const CheckoutDetails = () => {
  const [shippingAddress,setShippingAddress]=useState({...initialAddressState})
  const [billingAddress,setBillingAddress]=useState({...initialAddressState})


  const dispatch =useDispatch();
  const navigate=useNavigate();

  const handleShipping=(event) =>{
    const {name,value}=event.target
    setShippingAddress({...shippingAddress,[name]:value})
  }
  
  const handleBilling=(event) =>{
    const {name,value}=event.target
    setBillingAddress({...billingAddress,[name]:value})
    }

    const handleSubmit=(e) =>{
    e.preventDefault();
    // console.log(shippingAddress)
    // console.log(billingAddress)
    dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress))
    dispatch(SAVE_BILLING_ADDRESS(billingAddress))
    navigate("/checkout")
    }
  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <h2>Checkout Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Card cardClass={styles.card}>
              <h3>Shipping Address</h3>
               <label>Recipient Name</label>
               <input type="text" placeholder="Recipient Name" required name="name" value={shippingAddress.name} onChange={(e) => handleShipping(e)}/>
                 <label>Adres Line 1</label>
                 <input type="text" placeholder="Adderss Line 1" required name="line1" value={shippingAddress.line1} onChange={(e) => handleShipping(e)}/>
                 <label>Adres Line 2</label>
                 <input type="text" placeholder="Adderss Line 2"  name="line2" value={shippingAddress.line2} onChange={(e) => handleShipping(e)}/>
                 <label>City</label>
                 <input type="text" placeholder="City" required name="city" value={shippingAddress.city} onChange={(e) => handleShipping(e)}/>
                 <label>State</label>
                 <input type="text" placeholder="state" required name="state" value={shippingAddress.state} onChange={(e) => handleShipping(e)}/>
                 <label>Postal Code</label>
                 <input type="text" placeholder="Postal Code" required name="postal_code" value={shippingAddress.postal_code} onChange={(e) => handleShipping(e)}/>
                 <CountryDropdown className={styles.select} valueType='short'value={shippingAddress.country} onChange={(val)=>handleShipping({
                  target:{
                    name:"country",value:val
                  }
                 })}/>
                 <label>Phone</label>
                 <input type="text" placeholder="Phone" required name="phone" value={shippingAddress.phone} onChange={(e) => handleShipping(e)}/>
            </Card>
            
            <Card cardClass={styles.card}>
              <h3>Billing Address</h3>
               <label>Recipient Name</label>
               <input type="text" placeholder=" Name" required name="name" value={billingAddress.name} onChange={(e) => handleBilling(e)}/>
                 <label>Adres Line 1</label>
                 <input type="text" placeholder="Adderss Line 1" required name="line1" value={billingAddress.line1} onChange={(e) => handleBilling(e)}/>
                 <label>Adres Line 2</label>
                 <input type="text" placeholder="Adderss Line 2"  name="line2" value={billingAddress.line2} onChange={(e) => handleBilling(e)}/>
                 <label>City</label>
                 <input type="text" placeholder="City" required name="city" value={billingAddress.city} onChange={(e) => handleBilling(e)}/>
                 <label>State</label>
                 <input type="text" placeholder="state" required name="state" value={billingAddress.state} onChange={(e) => handleBilling(e)}/>
                 <label>Postal Code</label>
                 <input type="text" placeholder="Postal Code" required name="postal_code" value={billingAddress.postal_code} onChange={(e) => handleBilling(e)}/>
                 <CountryDropdown className={styles.select} valueType='short'value={billingAddress.country} onChange={(val)=>handleBilling({
                  target:{
                    name:"country",value:val
                  }
                 })}/>
                 <label>Phone</label>
                 <input type="text" placeholder="Phone" required name="phone" value={billingAddress.phone} onChange={(e) => handleBilling(e)}/>
                 <button type="submit"className="--btn --btn-primary">Proceed To Checkout</button>
            </Card>
          </div>
           <div>
             <Card cardClass={styles.card}>
               <CheckoutSummary/>
             </Card>
           </div>
        </form>
      </div>
    </section>
  )
}

export default CheckoutDetails