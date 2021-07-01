import React from 'react'
 const Iteam = ({title, description, img, quantity, price}) => {
    return (
        <>
              <div className="items-info">
                <div className="product-img">
                  <img
                    src={img}
                    alt=""
                  />
                </div>
                <div className="title">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                  <i class="fas fa-minus"></i>
                  <input type="text" placeholder="2" />
                  <i class="fas fa-plus"></i>
                </div>
                <div className="price">
                  <h3>{price} Rs</h3>
                </div>
                <div className="remove-item">
                  <i class="fas fa-trash-alt remove"></i>
                </div>
              </div>
              <hr /> 
        </>
    )
}
export default Iteam;
