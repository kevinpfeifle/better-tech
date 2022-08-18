
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ImageCarousel from '../../../ImageCarousel';
import { addItemToCart } from '../../../../actions/shopActions';

import { useParams } from "react-router-dom";

import { getProducts } from '../../../apis/productAPI';
/*
    ISSUE! Text overlaps the checkout buttons. This needs to be fixed!
*/
const ProductPage = () => {
    const { productId } = useParams();

    useEffect(() => {
        getProducts();
      }, []);

      

    const addToCart = (itemCount=1) => {
        let item = {
            itemId: itemId,
            itemCount: itemCount,
            itemName: itemTitle,
            itemImage: itemImgs[0],
            itemPrice: itemPrice
        }
        dispatch(addItemToCart(item));
    };

    const dispatch = useDispatch();

    return (
        <div className='m-0 p-0 mb-5' style={{position: 'relative'}}>
            <div className='m-3'>
                <ImageCarousel images={itemImgs}></ImageCarousel>
            </div>
            <div className='m-3 mb-5'>
                <h1>{itemTitle}</h1>
                <h5>{itemMFG}</h5>
                <h5>{'$' + itemPrice.toFixed(2)}</h5>
                <p className='fw-lighter fst-italic'>Free shipping</p>
                <p>{itemDescription}</p>
            </div>

            <Stack direction='horizontal' gap={3} className='align-items-center justify-content-center fixed-bottom p-3 bg-white'>
                <Button variant="dark" size='lg' style={{width:'10rem'}} onClick={() => addToCart()}>Add to Cart</Button>
                <Button variant="dark" size='lg' style={{width:'10rem'}} disabled>Buy Now</Button>
            </Stack>
        </div>
    );
};

export default ProductPage;