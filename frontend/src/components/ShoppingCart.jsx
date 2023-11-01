import React from 'react'
import ProductItems from './ProductItems'

const ShoppingCart = () => {
  /*Here we define the js vars and function*/
  const products_list=[
    {
      "imageUrl":"https://m.media-amazon.com/images/I/31YE9kV-D+L._SY300_SX300_.jpg",
      "title":"Honeywell High-Speed Type C to RJ45 Gigabit Ethernet Adapter, 10/100/1000 MBPS",
      "price":"1650"
    },
    {"imageUrl":"https://m.media-amazon.com/images/I/510ZopFr3FL._SY741_.jpg",
      "title":"CableCreation USB to Ethernet Adapter, USB 3.0 to 10/100/1000 Gigabit ",
      "price":"1225"
    }
  ]
  return (
    <div className="shoppingcart">
      <h1>ShoppingCart</h1>
        {products_list.map((x)=>{
        return (
        <ProductItems imageUrl={x.imageUrl}
                    title={x.title}
                    price={x.price}/>)
      })}
    </div>
  );
}
export default ShoppingCart