"use client";
import React, { useState } from 'react';

function GroceryTracker() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = () => {
      if (newItem && quantity > 0) {
          const newItemObject = { name: newItem, quantity };
          setItems([...items, newItemObject]);
          setNewItem('');
          setQuantity(1);
      }
  };

  const addToCart = () => {
      setCart(prevCart => {
          // Create a new cart array combining current items and new items
          let newCart = [...prevCart];
          
          items.forEach(itemToAdd => {
              const existingItem = newCart.find(item => item.name === itemToAdd.name);
              if (existingItem) {
                  // Increment quantity if item exists
                  newCart = newCart.map(item =>
                      item.name === itemToAdd.name ? { ...item, quantity: item.quantity + itemToAdd.quantity } : item
                  );
              } else {
                  // Add new item if it does not exist
                  newCart.push(itemToAdd);
              }
          });

          return newCart;
      });

      // Optionally clear the items list after adding to cart
      setItems([]);
  };

  return (
      <div style={styles.container}>
          <h1 style={styles.header}>Grocery Tracker</h1>
          <div style={styles.inputGroup}>
              <input
                  style={styles.input}
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Add a new item"
              />
              <input
                  style={styles.input}
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                  min="1"
                  placeholder="Quantity"
              />
              <button style={styles.addButton} onClick={handleAddItem}>Add to List</button>
          </div>
          <button style={styles.addButton} onClick={addToCart}>Add All to Cart</button>
          <ul style={styles.list}>
              {items.map((item, index) => (
                  <li key={index} style={styles.listItem}>
                      {item.name} - Quantity: {item.quantity}
                  </li>
              ))}
          </ul>

          <h2 style={styles.header}>Cart</h2>
          <ul style={styles.list}>
              {cart.map((item, index) => (
                  <li key={index} style={styles.listItem}>
                      {item.name} - Quantity in Cart: {item.quantity}
                  </li>
              ))}
          </ul>
      </div>
  );
}

// Styles
const styles = {
    container: {
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: '"Arial", sans-serif'
    },
    header: {
        color: '#333',
        marginBottom: '20px'
    },
    inputGroup: {
        marginBottom: '20px'
    },
    input: {
        marginRight: '10px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ddd'
    },
    addButton: {
        padding: '10px 15px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    list: {
        listStyleType: 'none',
        padding: '0'
    },
    listItem: {
        textAlign: 'left',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        backgroundColor: '#f7f7f7',
        border: '1px solid #ddd'
    }
};

export default GroceryTracker;

