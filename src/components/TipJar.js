import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { useState } from 'react';

const TipJar = ({img}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showNotification, setShowNotification] = useState(false);

    const handleCloseNotification = () => setShowNotification(false);
    const handleShowNotification = () => setShowNotification(true);

    return (
        <div style={{height: '100%', width:'100%'}}>
            <div className='d-flex align-items-center justify-content-center' style={{height: '100%'}}  onClick={handleShow}>
                Tips
            </div>
            
            <Modal show={show} onHide={handleClose} centered fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>Tip Jar</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{position: 'relative', backgroundImage: 'url('+img+')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
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
                                    <Button variant='dark' style={{width:'100%'}} onClick={handleShowNotification}>Send Tip</Button>
                                </Form.Group>
                            </Form>
                        </Stack>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showNotification} onHide={handleCloseNotification} centered>
                {/* <Modal.Header closeButton>
                    <Modal.Title>You Rock!</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <Form>
                    <Stack>
                        <h4 style={{height:'20%'}}>Thank you so much, let's connect!</h4>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Group controlId='thanksModalFirstName' className='mt-3' style={{width:'50%'}}>
                                <FloatingLabel controlId='thanksModalFirstName' label='First Name'>
                                    <Form.Control as='input' type='text' placeholder='First Name'></Form.Control>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId='thanksModalLastName' className='mt-3' style={{width:'50%'}}>
                                <FloatingLabel controlId='thanksModalLastName' label='Last Name'>
                                    <Form.Control as='input' type='text' placeholder='Last Name'></Form.Control>
                                </FloatingLabel>
                            </Form.Group>
                        </Stack>
                        <Form.Group controlId='thanksEmail'  className='mt-3'>
                            <FloatingLabel controlId='thanksEmail' label='Email Address'>
                                <Form.Control as='input' type='text' placeholder='Email Address'></Form.Control>
                            </FloatingLabel>
                        </Form.Group>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Group controlId='thanksSubmit' className='mt-3' style={{width:'50%'}}> 
                                <Button style={{width:'100%'}} variant='dark'>Submit</Button>
                            </Form.Group> 
                            <Form.Group controlId='thanksSkip' className='mt-3' style={{width:'50%'}}> 
                                <Button style={{width:'100%'}} variant='secondary' onClick={handleCloseNotification}>Skip</Button>
                            </Form.Group>
                        </Stack>
                    </Stack>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TipJar;