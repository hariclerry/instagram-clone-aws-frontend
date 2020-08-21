import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

import "../feed-lists/feedLists.css";

const EditUploadModal = (props) => {
  const {
    onChangeInput,
    onHandleClose,
    isEdit,
    tempFeed,
    onFeedUpdateSubmit,
    loading,
  } = props;

  return (
    <div>
      <Modal
        show={isEdit}
        onHide={onHandleClose}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Add status
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={onFeedUpdateSubmit}>
          <Modal.Body>
            {" "}
            <div style={{ margin: "30px" }}>
              {" "}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Add image caption</Form.Label>
                <Form.Text className="text-muted">*</Form.Text>
                <Form.Control
                  type="text"
                  name="imageCaption"
                  value={tempFeed.imageCaption}
                  onChange={onChangeInput}
                  required
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHandleClose}>
              Close
            </Button>
            <Button
              variant="success"
              type="submit"
              disabled={loading ? true : false}
            >
              {loading ? "Loading..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default EditUploadModal;
