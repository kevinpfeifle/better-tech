import CartNavbar from './components/CartNavbar';
import CartItem from './components/CartItem';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import { useSelector, useDispatch } from 'react-redux';

const ShoppingCart = () => {

    const itemCount = useSelector((state) => state.shop.cart.totalCount);
    const subTotal = useSelector((state) => state.shop.cart.subTotal);
    const items = useSelector((state) => state.shop.cart.items);
    const dispatch = useDispatch();

    return (
        <div style={{paddingTop: '3rem'}}>
            <CartNavbar></CartNavbar>
            <h1 className='m-3 text-start'>Shopping Cart</h1>
            <p className='m-3 text-start'>{itemCount} items</p>
            <hr className='m-3 border border-1 border-dark opacity-75'></hr>
            {
                (Object.entries(items).length > 0) ? Object.entries(items).map((item) => (
                    <CartItem key={item[1].name} itemId={item[0]} itemName={item[1].name} itemImage={item[1].image} itemPrice={item[1].price} itemCount={item[1].count}></CartItem>
                )) : 
                <div>
                    <h1>Your cart is empty!</h1>
                    <Image fluid={true} src={'/store/emptyCart.png'} style={{height:'100%', width: '30%', transform: 'translateZ(0)'}}></Image>
                    <h6>Go buy something ;)</h6>
                </div>
            }
            {
                (Object.entries(items).length > 0) && <Stack direction='vertical' gap={1} style={{position:'relative'}}>
                    <div className='ms-4 me-4'>
                        <p className='float-start' style={{display:'inline-block'}}>Subtotal</p>
                        <h5 className='float-end' style={{display:'inline-block'}}>{'$' + subTotal.toFixed(2)}</h5>
                    </div>
                    <div>
                        <Button className='mb-4' style={{width:'90%'}} variant='dark'>Checkout</Button>
                    </div>
                </Stack>
            }
        </div>  
    );
};

export default ShoppingCart