import React from 'react'
import { formatCurrency } from '../utils/helper'
const Product = ({item}) => {
  return (
    <div className="product-card flex-center">
    <div className="product-tumb">
        <img src={item.image} alt=""/>
    </div>
    <div className="product-details">
        <h4><a href="">{item.name}</a></h4>
            <div className="product-price">{formatCurrency(item.price)}</div>
    </div>
    <div className="cart-icon">
    <ion-icon name="cart-outline" size="large"></ion-icon>
    <ion-icon name="eye-outline"  size="large"></ion-icon>
    </div>
</div>
  )
}

export default Product