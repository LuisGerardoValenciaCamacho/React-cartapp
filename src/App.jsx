import React from 'react'
import { NavigationView } from './components/NavigationView'
import { useItemsCart } from './hooks/useItemsCart';
import { CartRoutes } from './routes/CartRoutes';

export const App = () => {
    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();
    return (
        <>
            <NavigationView />
            <div className="container my-4">
                <h3>Card App</h3>
                <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProductCart={handlerDeleteProductCart} />
            </div>
        </>
    )
}
