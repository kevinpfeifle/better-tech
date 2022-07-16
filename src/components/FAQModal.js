import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

const FAQModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{height: '100%', width:'100%'}}>
            <div className='d-flex align-items-center justify-content-center' style={{height: '100%'}} onClick={handleShow}>
                FAQ
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>FAQ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How many stylists do you have?</Accordion.Header>
                            <Accordion.Body>
                                <p className='text-wrap'>No idea, how many are there? Great question.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>If I don't have any hair, are appointments cheaper?</Accordion.Header>
                            <Accordion.Body>
                                <p className='text-wrap'><strong>No.</strong></p>
                                <p className='text-wrap'>We base our prices on the assumption you have hair. If you have no hair, you are welcome to make an appointment, though you will not leave with any more hair than when you arrived.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What if I am unhappy with my hair style?</Accordion.Header>
                            <Accordion.Body>
                                <p className='text-wrap'><strong>You won't be.</strong></p>
                                <p className='text-wrap'>Our hair styles are the greatest hair styles, we promise.</p>
                                <p className='text-wrap'>Some say that we give people the best hair. I'm not saying that, but some people are.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FAQModal;
