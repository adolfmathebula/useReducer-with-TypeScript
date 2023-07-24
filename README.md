# Code Documentation: useReducer with TypeScript

## Description

This block of [code](https://github.com/adolfmathebula/useReducer-with-TypeScript/blob/main/ReducerCart.tsx) defines a [React](https://react.dev/) component called `ReducerCart` that implements a shopping cart functionality using the [useReducer](https://react.dev/reference/react/useReducer/) hook. The component uses [TypeScript](https://www.typescriptlang.org/) to provide strong typing and enhance code clarity and maintainability.

The `ReducerCart` component manages the state of the shopping cart, which consists of an array of `ProductType` objects representing the products in the cart. The state is initialized with an empty cart using the initialState constant.

The component's core logic is implemented in the reducer function, which handles various actions dispatched to it using the [useReducer](https://react.dev/reference/react/useReducer/) hook. The supported actions are `ADD_TO_CART, REMOVE_FROM_CART, and CLEAR_CART`. The reducer updates the state based on the type of action and the corresponding payload.

The component renders the list of products in the cart along with buttons to add products to the cart, remove products from the cart, and clear the entire cart. The rendered buttons call the corresponding methods (`addToCart, removeFromCart, and clearCart`) when clicked, and the reducer updates the state accordingly.

Overall, this code block demonstrates a concise and well-organized implementation of a shopping cart component in [React](https://react.dev/), utilizing [TypeScript](https://www.typescriptlang.org/) for type safety and improved development experience. The use of the [useReducer](https://react.dev/reference/react/useReducer/) hook allows for a more structured and scalable state management approach compared to traditional [React](https://react.dev/) state handling

Note: this documentation assumes you are familiar with [TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/). This is meant to be a guide for those who want to use useReducer with TypeScript, to assist them with an example of it.

## Usage

To use the ReducerCart component, simply import and render it in your [React](https://react.dev/) application:

```tsx
import React from "react";
import ReducerCart from "./ReducerCart"; // Assuming this is the correct file path for ReducerCart component

const App = () => {
  return (
    <div>
      {/* Other components or content */}
      <ReducerCart />
      {/* Other components or content */}
    </div>
  );
};

export default App;
```

## State and Actions

The component uses the [useReducer](https://react.dev/reference/react/useReducer/) hook to manage the state of the cart. The state and action types are defined as follows:

```tsx
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
```

## Reducer Function

The reducer function handles the state updates based on the dispatched actions. It supports three action types: `ADD_TO_CART, REMOVE_FROM_CART, and CLEAR_CART`.

```tsx
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
```

## Component Methods

The `ReducerCart` component provides the following methods to interact with the cart:

`addToCart(product: ProductType): void`
Adds the specified product to the cart.

`removeFromCart(product: ProductType): void`
Removes the specified product from the cart.

`clearCart(): void`
Clears all products from the cart.

## Rendering

The component renders the shopping cart items along with buttons to interact with the cart:

```tsx
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
    <button onClick={() => addToCart({ id: 1, name: "Product 1", price: 10 })}>
      Add To Cart 1
    </button>
    <br />
    <button onClick={() => addToCart({ id: 2, name: "Product 2", price: 20 })}>
      Add To Cart 2
    </button>
    <br />
    <button onClick={() => addToCart({ id: 3, name: "Product 3", price: 30 })}>
      Add To Cart 3
    </button>
    <br />
    <button onClick={() => clearCart()}>Clear Cart</button>
    <br />
  </div>
);
```

## Customization

You can customize the component by modifying the rendering, adding new action types, or updating the `ProductType` according to your specific use case.

## Tools Used

[React](https://react.dev/) | [TypeScript](https://www.typescriptlang.org/)

## Authors

[Adolf Mathebula](https://www.adolfmathebula.co.za) |
[ChatGPT](https://chat.openai.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
