////cart sayfasından checout sayfasına ulaştık , oradan gerekli bilgileri girip proceed to checkout tuşuna bastık. Bize kredi kartı bilgilerini gireceğimiz alan çıktı. Kredi kartı bilgilerini girip pay now kısmına bastığımızda işlemde bir problem yoksa bu sayfa gösterilir.
  import React from "react"
 import {Link} from "react-router-dom"
 
 
 const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Checkout successful</h2>
        <p>Thank you for your purchase</p>
        <br/>
          <button className="--btn --btn-primary">
            <Link to="/order-history">
              View Order Status
            </Link>
          </button>
      </div>
    </section>
  )
}

export default CheckoutSuccess