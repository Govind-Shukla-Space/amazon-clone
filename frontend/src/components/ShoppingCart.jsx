import React,{useState} from 'react'
import ProductItems from './ProductItems'

const ShoppingCart = () => {
    let [product_list,setproductlist] =useState([
      {
        "imageUrl":"https://m.media-amazon.com/images/I/31YE9kV-D+L._SY300_SX300_.jpg",
        "title":"Honeywell High-Speed Type C to RJ45 Gigabit Ethernet Adapter, 10/100/1000 MBPS",
        "price":"1650"
      },
      {"imageUrl":"https://m.media-amazon.com/images/I/510ZopFr3FL._SY741_.jpg",
        "title":"CableCreation USB to Ethernet Adapter, USB 3.0 to 10/100/1000 Gigabit ",
        "price":"1225"
      }
  ])
    const addToCart = (item) =>{
      product_list.add(item)
    }

    function removeFromCart(title){
      setproductlist(product_list.filter((item) => item.title !== title))
      }
    
    
  return (
    <div className='Cart'>
        <h1>Shopping Cart</h1>
        {product_list.map((x) =><ProductItems iUrl={x.imageUrl}
                                              title={x.title} 
                                              Price={x.Price}
                                              removeFromCart={removeFromCart}/> )}
    </div>
  )
}

export default ShoppingCart