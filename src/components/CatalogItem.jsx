import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CatalogItem = ({ id, name, description, price, handlerAdd }) => {

    const navigate = useNavigate();

    const addCartItem = (cart) => {
        handlerAdd(cart)
        navigate("/cart");
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text">$ { price }</p>
                    <button className="btn btn-success" onClick={() => addCartItem({id, name, description, price})}>Agregar</button>
                </div>
            </div>
        </div>
    )
}
