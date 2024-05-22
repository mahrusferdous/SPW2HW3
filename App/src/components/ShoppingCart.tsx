import React, { FormEvent, useReducer, useState } from "react";
import CartReducer from "../reducers/CartReducer";
import { Item } from "../reducers/CartState";

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(CartReducer, { Cart: [] });
    const [itemName, setItemName] = useState<string>("");
    const [itemPrice, setItemPrice] = useState<number>(0);

    const addItem = (event: FormEvent) => {
        event.preventDefault();
        const newItem: Item = { id: Date.now(), item: itemName, price: itemPrice };
        dispatch({ type: "ADD_ITEM", payload: newItem });
        setItemName("");
    };

    const removeItem = (itemId: number) => {
        dispatch({ type: "REMOVE_ITEM", payload: itemId });
    };

    return (
        <div>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    value={itemName}
                    onChange={(event) => setItemName(event?.target.value)}
                    placeholder="Item Name"
                />
                <input
                    type="text"
                    value={itemPrice}
                    onChange={(event) => setItemPrice(parseInt(event?.target.value))}
                    placeholder="Item Price"
                />
                <button type="submit">Add Item</button>
            </form>

            <ul>
                {state.Cart.map((item) => (
                    <li>
                        {item.item}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}

                {state.Cart.reduce((acc, item) => acc + item.price, 0)}
            </ul>
        </div>
    );
};

export default ShoppingCart;
