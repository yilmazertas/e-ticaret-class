//// home sayfasındaki ürünler hakkında gösterim, arama, sıralama yapabildiğiniz kısımla beraber tüm ürün kartlarının sergilendiği yer. ürün kartları (productıtem) adlı komponentde işlenecektir.
import React, { useState } from 'react'
import styles from "./ProductList.module.scss"
import {BsFillGridFill} from "react-icons/bs"
import {FaListAlt } from "react-icons/fa"
import Search from '../../search/Search';
import ProductItem from '../productItem/ProductItem';


const ProductList = ({products}) => {
  const [grid,setGrid] = useState(true);
  const [search,setSearch] = useState("");
  return (
    <div className={styles["product-list"]} id="product">
       <div className={styles.top}>
          <div className ={styles.icons}>
            <BsFillGridFill size ={22} color ="orangered" onClick={()=>
        setGrid(true)}/>
        <FaListAlt size = {24} color ="#0066d4" onClick={()=>setGrid(false)}/>
             <p>
               <b>10</b> Products found.
             </p>
            </div>
             <div>
               <Search value={search} onChange={(e) => setSearch(e.target.value)}/>
             </div>
            <div className={styles.sort}>
              <label>Sort by:</label>
              <select name="category">
                 <option value="latest">Latest</option>
                 <option value="lowest-price">Lowest-Price</option>
                 <option value="highest-price">Highest-Price</option>
                 <option value="a-z">A-Z</option>
                 <option value="z-a">Z-A</option>
              </select>
            </div>
        </div>
         <div className={grid && `${styles.grid}`}>
            {products.lenght === 0 ? (
              <p>No Products found.</p>
            ):(
              <>
              {products.map((product)=>{
                return(
                  <div key={product.id}>
                    <ProductItem {...product} grid={grid} product={product}/>
                  </div>
                )
              })

              }
              </>
            )}
         </div>
    </div>
 );
};

export default ProductList;