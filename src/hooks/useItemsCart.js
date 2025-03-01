import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateProductCart } from "../reducer/itemsActions";

export const useItemsCart = () => {
    const initialCartItems = JSON.parse(sessionStorage.getItem("items")) || [];

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem("items", JSON.stringify(cartItems));
    }, [cartItems])

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find(item => item.product.id === product.id);
        if(hasItem) {
            dispatch({
                type: UpdateProductCart,
                payload: product.id
            });
            return;
        }
        dispatch({
            type: AddProductCart,
            payload: product
        });
        return;
    }
    const handlerDeleteProductCart = (id) => {
        dispatch({
            type: DeleteProductCart,
            payload: id
        })
    }
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}
