import React, { useEffect, useState } from 'react'
import { calculateTotal } from '../services/productService';
import { useNavigate } from 'react-router-dom';

export const CartView = ({cartItems, handlerDelete}) => {

    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(cartItems));
    }, [cartItems])

    const deleteProductCart = (id) => {
        handlerDelete(id);
    }

    const onCatalog = () => {
        navigate("/catalog");
    }

    return (
        <>
            <h3>Carro de compras</h3>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <td>Producto</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>Total</td>
                        <td>Eliminar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(item => (
                            <tr key={ item.product.id }>
                                <td>{ item.product.name }</td>
                                <td>{ item.product.price }</td>
                                <td>{ item.quantity }</td>
                                <td>$ { item.quantity * item.product.price }</td>
                                <td><button className='btn btn-danger' onClick={() => deleteProductCart(item.product.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className='text-end fw-bold'>Total: </td>
                        <td colSpan="2" className='text-center fw-bold'>$ {total}</td>
                    </tr>
                </tfoot>
            </table>
            <button className='btn btn-info' onClick={onCatalog}>Seguir comprando</button>
        </>
    )
}
