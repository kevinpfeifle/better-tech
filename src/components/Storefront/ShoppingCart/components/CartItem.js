import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CountAdjustor from '../../../ui/CountAdjustor';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { addItemToCart, removeItemFromCart } from '../../../../actions/shopActions';

import { FiTrash2 } from 'react-icons/fi';

const CartItem = ({itemId, itemName, itemImage, itemPrice, itemCount, itemModifier=''}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Updates the count of the item by +/- 1 to reflec the +/- 1 count adjustor.
    const updateCount = (newCount) => {
        let item = {
            itemId: itemId,
            itemCount: 1
        };
        (newCount > itemCount) ? dispatch(addItemToCart(item)) : dispatch(removeItemFromCart(item));
    };

    // Sends a removeItem dispatch with -1 to delete the item entirely.
    const removeItem = () => {
        let item = {
            itemId: itemId,
            itemCount: -1
        }
        dispatch(removeItemFromCart(item));
        handleClose();
    };

    const dispatch = useDispatch();
    return (
        <>
            <div className='m-3 text-start'>
                <Stack direction='horizontal' gap={3} style={{height:'8rem'}}>
                    <Image fluid={true} src={itemImage} style={{height:'100%', width: '30%', transform: 'translateZ(0)'}}></Image>
                    <Stack direction='vertical' gap={1} style={{position:'relative'}}>
                        <div style={{width:'100%'}}>
                            <h3 className='float-start' style={{display:'inline-block'}}>{itemName}</h3>
                            <FiTrash2 className='text-danger float-end' style={{display:'inline-block'}} onClick={handleShow}></FiTrash2>
                        </div>
                        <h5>{itemModifier}</h5>
                        <div style={{position:'absolute', bottom:0, right:0, width:'100%'}}>
                            <p className='float-start' style={{display:'inline-block'}}>{'$' + itemPrice.toFixed(2)}</p>
                            <div className='float-end' style={{display:'inline-block'}}>
                                <CountAdjustor count={itemCount} incrementFunc={updateCount} decrementFunc={updateCount} deletable={true}></CountAdjustor>
                            </div>
                        </div>
                    </Stack>
                </Stack>
                <hr></hr>
            </div>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove this item from your cart?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={removeItem}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CartItem;