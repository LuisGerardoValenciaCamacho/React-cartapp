import { db } from "../data/db.js"

export const getAll = () => {
    return db;
}

export const calculateTotal = (cartItems) => {
    return cartItems.map(item => item.quantity * item.product.price).reduce((accumulator, currentValue) => accumulator += currentValue, 0);
}