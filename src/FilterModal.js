import React, { useState} from 'react';
import { Modal, Button,  } from 'react-bootstrap';

const FilterModal = (showModal) => {
    const [show, setShow] = useState(showModal);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <Modal.Dialog  show={show} >
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Clear All</Button>
                <Button variant="primary">Apply filter</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default FilterModal

