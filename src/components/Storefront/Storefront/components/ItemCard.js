import Card from 'react-bootstrap/Card';

import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ImageCarousel from '../../../ImageCarousel';

/*
    ISSUE! Text overlaps the checkout buttons. This needs to be fixed!
*/
const ItemCard = ({itemImgs, itemTitle, itemPrice, itemDescription='', itemMFG, itemShipPrice='Free shipping'}) => {
    const [visible, setVisible] = useState(false);

    const handleClose = () => setVisible(false);
    const handleShow = () => setVisible(true);

    return (
        <div style={{width: '100%'}}>
            {/* Item Card */}
            <Card style={{width: '100%', height: '20rem'}} onClick={handleShow}>
                <Card.Img variant="top" src={itemImgs[0]} style={{ height: '10rem', width: '100%', transform: 'translateZ(0)', objectFit: 'contain'}} />
                <Card.Body className='bg-light'>
                    <Card.Title>{itemTitle}</Card.Title>
                    <Card.Text className='text-start'>
                        <p className='m-0 fw-bold'>{itemPrice}</p>
                        <p className='m-0 fw-lighter'>{itemMFG}</p>
                        <p className='m-0 fw-lighter fst-italic'>{itemShipPrice}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Item Page Modal */}
            <Modal show={visible} onHide={handleClose} centered fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='m-0 p-0' style={{position: 'relative'}}>
                    <ImageCarousel images={itemImgs}></ImageCarousel>
                    <div className='m-3'>
                        <h1>{itemTitle}</h1>
                        <h5>{itemMFG}</h5>
                        <h5>{itemPrice}</h5>
                        <p className='fw-lighter fst-italic'>{itemShipPrice}</p>
                        <p>{itemDescription}</p>
                    </div>

                    <Stack direction='horizontal' gap={3} className='align-items-center justify-content-center fixed-bottom p-3 bg-white'>
                        <Button variant="dark" size='lg' style={{width:'10rem'}}>Add to Cart</Button>
                        <Button variant="dark" size='lg' style={{width:'10rem'}} disabled>Checkout</Button>
                    </Stack>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ItemCard;