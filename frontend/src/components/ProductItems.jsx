import React from 'react'

export const ProductItems = ({ iUrl: imageUrl, title, price }) => {
  return (
    <div>
      <img src={imageUrl} />
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
}
export default ProductItems;
