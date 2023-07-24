"use client";
import React, { useReducer } from "react";

//Types
type StateType = { cart: ProductType[] };
type ProductType = { id: number; name: string; price: number };

type AddType = {
  type: "ADD_TO_CART";
  payload: ProductType;
};

type RemoveType = {
  type: "REMOVE_FROM_CART";
  payload: ProductType;
};

type ClearType = {
  type: "CLEAR_CART";
};

type ActionType = AddType | RemoveType | ClearType;

//Initial State
const initialState: StateType = { cart: [] };

//reducer Function
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item: ProductType) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

//Component
const ReducerCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product: ProductType) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (product: ProductType) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {state.cart.map((product: ProductType) => {
        return (
          <div key={product.id}>
            <p>
              {product.name} - {product.price}
            </p>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        );
      })}
      <button
        onClick={() => addToCart({ id: 1, name: "Product 1", price: 10 })}
      >
        Add To Cart 1
      </button>
      <br />
      <button
        onClick={() => addToCart({ id: 2, name: "Product 2", price: 20 })}
      >
        Add To Cart 2
      </button>
      <br />
      <button
        onClick={() => addToCart({ id: 3, name: "Product 3", price: 30 })}
      >
        Add To Cart 3
      </button>
      <br />
      <button onClick={() => clearCart()}>Clear Cart</button>
      <br />
    </div>
  );
};

export default ReducerCart;
