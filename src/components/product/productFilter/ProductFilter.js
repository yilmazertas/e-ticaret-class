//// home kısmında ürün filtreleme yapılan sol yer
import React from 'react'
import styles from "./ProductFilter.module.scss"


const ProductFilter = () => {
  return (
    <div className ={styles.filtre}>
      <h4>Categories</h4>
       <div className={styles.category}>
         <bottun>All</bottun>
       </div>
        <h4>Brand</h4>
        <div className ={styles.brand}>
           <select className="brand">
             <option value="all">All</option>
           </select>
            <h4>Price</h4>
            <p>500</p>
             <div className={styles.price}>
              <input type ="range" name="price" min="100" max="1000"/>
             </div>
             <br/>
             <bottun className ="--btn --btn-danger">Clear Filter</bottun>
        </div>
    </div>
  )
}

export default ProductFilter