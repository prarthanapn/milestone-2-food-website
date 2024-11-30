import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const OrderCustomization = () => {
  const item = {
    id: 1,
    name: '',
    description: 'J',
    price: 0
  };

  let size = 'Medium'; 
  let ingredients = []; 
  let addons = [];
  let quantity = 1; 

  const handleSizeChange = (e) => {
    size = e.target.value;
  };

  const handleIngredientChange = (ingredient) => {
    if (ingredients.includes(ingredient)) {
      ingredients = ingredients.filter(i => i !== ingredient);
    } else {
      ingredients.push(ingredient);
    }
  };

  const handleAddonChange = (addon) => {
    if (addons.includes(addon)) {
      addons = addons.filter(a => a !== addon);
    } else {
      addons.push(addon);
    }
  };

  const handleQuantityChange = (operation) => {
    quantity = operation === 'increment' ? quantity + 1 : quantity - 1;
    if (quantity < 1) quantity = 1;
  };

  const handleAddToCart = (addToCart) => {
    const customizedItem = {
      ...item,
      size,
      ingredients,
      addons,
      quantity,
      totalPrice: (item.price * quantity).toFixed(2),
    };

    addToCart(customizedItem);
  };

  return (
    <CartContext.Consumer>
      {({ addToCart }) => (
        <div className="order-customization-container">
          <h1>Customize Your Order</h1>


          <div className="customization-options">
            <div className="customization-option">
              <label>Size:</label>
              <select onChange={handleSizeChange} defaultValue={size}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

            <div className="customization-option">
              <label>Ingredients:</label>
              <div>
                <input type="checkbox" onChange={() => handleIngredientChange('Extra Cheese')} /> Extra Cheese
              </div>
              <div>
                <input type="checkbox" onChange={() => handleIngredientChange('Olives')} /> Olives
              </div>
              <div>
                <input type="checkbox" onChange={() => handleIngredientChange('Peppers')} /> Peppers
              </div>
            </div>

            <div className="customization-option">
              <label>Add-Ons:</label>
              <div>
                <input type="checkbox" onChange={() => handleAddonChange('French Fries')} /> French Fries
              </div>
              <div>
                <input type="checkbox" onChange={() => handleAddonChange('Soda')} /> Soda
              </div>
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <button onClick={() => handleQuantityChange('decrement')}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
          </div>

          <button className="finish-customization-btn">
            Finish Customizing
          </button>

          <Link to="/cart" className="back-to-cart-btn">
            View Cart
          </Link>
        </div>
      )}
    </CartContext.Consumer>
  );
};

export default OrderCustomization;
