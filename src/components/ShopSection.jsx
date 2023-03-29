import React from 'react'
import { clothProducts } from '../data/product'
import Product from './Product'
import Title from './Title'

const titleData={
    title:"Great Selection",
    subtitle:"Follow the most popular trends and get exclusive items from hendo shop"
}
const ShopSection = () => {
  return (
    <div>
        <div>
            <Title titleData={titleData}/>
            <div className="product-section">
                {
                clothProducts.map((item,index)=><Product item={item} key={index}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default ShopSection