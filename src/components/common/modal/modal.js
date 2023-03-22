import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import Post from '../../pages/Post/Post';
import { Navigate } from 'react-router-dom';


function ModalPrimary({id}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
   dispatch(removePost({id}));
   //handleClose();
  
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Remove
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app. Are you sure you wanna do that? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPrimary;