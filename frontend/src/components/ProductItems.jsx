import React from 'react'

export const ProductItems = (props) => {
  const imageUrl=props.imageUrl;
  const title=props.title;
  const price=props.price;
  return (
    <div>
        <img src={imageUrl}/>
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
  );
}
export default ProductItems;
