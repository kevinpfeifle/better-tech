import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { useState } from 'react';

const ItemPage = ({itemImg, itemTitle, itemPrice, itemMFG, itemShipPrice='Free shipping', visible, handleClose}) => {
    const closeModal = () => handleClose();

    return (
        <div key={visible}>          
            <Modal show={visible} onHide={() => closeModal()} centered fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>{itemTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{position: 'relative', backgroundImage: 'url('+itemImg+')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='form-outline rounded fixed-bottom m-3 p-2 text-center' style={{height:'50%', backgroundColor:'rgba(255,255,255,.75)'}}>
                        <Stack style={{height:'100%'}}>
                            <h3 style={{height:'20%'}}>If you like my content, let me know!</h3>
                            <Form style={{height:'80%'}}>
                                <Form.Group controlId='tipJarAmount'  style={{height:'20%'}}>
                                    <FloatingLabel controlId='tipJarAmount' label='Amount'>
                                        <Form.Control as='input' type='number' min='0.00' step='0.01' placeholder='1.00'></Form.Control>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group controlId='tipJarNote'  className='mt-3' style={{height:'50%'}}>
                                    <FloatingLabel controlId='tipJarNote' label='Leave a Note' style={{height:'100%'}}>
                                        <Form.Control as='textarea' placeholder='Leave a Note' style={{height:'100%'}}></Form.Control>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group controlId='tipJarButton' className='mt-3' style={{height:'10%'}}> 
                                    <Button style={{width:'100%'}}>Send Tip</Button>
                                </Form.Group>
                            </Form>
                        </Stack>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ItemPage;