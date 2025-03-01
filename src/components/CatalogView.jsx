import React, { useEffect, useState } from 'react'
import { getAll } from '../services/productService.js';
import { CatalogItem } from './CatalogItem.jsx';
import { useGetFetch } from '../hooks/useFetch.js';
import { useFetch } from '../utils/useFetch.js';

export const CatalogView = ({handlerAdd}) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState({error: false, message: "OK"})

    useEffect(() => {
        const fetch = useFetch("http://localhost:5500/api/product/all", "get");
        fetch.then(response => {
            if(response.code == 200) {
                setProducts(response.result);
                return;
            }
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            setError({error: true, message: response.result})
            
        });
    }, [])

    return (
        <div className="row">
            {
                products.length != 0 
                ? products.map(product => (
                    <div className="col-4 my-2" key={ product.id }>    
                        <CatalogItem id={ product.id } name={ product.name } description={ product.description } price={ product.price } handlerAdd={ handlerAdd } />
                    </div>
                ))
                : error.error
                    ? <div className='mt-5 alert alert-danger' role="alert">{error.message}</div>
                    : <div className="mt-5 alert alert-info" role="alert">Products not found</div>
            }
        </div>
    )
}
