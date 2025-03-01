import { AddProductCart, DeleteProductCart, UpdateProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
    switch(action.type) {
        case AddProductCart:
            return [...state, {
                    product: action.payload,
                    quantity: 1
                }
            ]
        case UpdateProductCart:
            return state.map(item => {
                if(item.product.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity++
                    }
                }
                return item;
            })
        case DeleteProductCart:
            const hasItem = state.find(item => item.product.id === action.payload);
            if(hasItem.quantity === 1) {
                return state.filter(item => item.product.id !== action.payload);
            }
            return state.map(item => {
                if(item.product.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity--
                    }
                }
                return item;
            })
        default:
            return state;
    }
}
