import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'

import UploadImage from "../upload-image/uploadImage";

const UploadModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Upload photo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div style={{ margin: "30px" }}>
            {" "}
            <UploadImage />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadModal;
