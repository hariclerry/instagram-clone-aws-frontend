import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

import "../feed-lists/feedLists.css";

const UploadModal = (props) => {
  const {
    onChangeInput,
    onFileChange,
    onHandleCreateSubmit,
    onHandleClose,
    imageCaption,
    show,
    loading,
  } = props;


  return (
    <div>
      <Modal
        show={show}
        onHide={onHandleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add status
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={onHandleCreateSubmit}>
          <Modal.Body>
            {loading ? (
              <div className="feeds-spinner">
                <Spinner animation="border" variant="success" />
              </div>
            ) : (
              <div style={{ margin: "30px" }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Add image caption</Form.Label>
                  <Form.Text className="text-muted">*</Form.Text>
                  <Form.Control
                    type="text"
                    value={imageCaption}
                    onChange={onChangeInput}
                    required
                  />
                </Form.Group>
                <div className="mb-3 image-upload">
                  <Form.File id="formcheck-api-regular">
                    <Form.Text className="text-muted">*</Form.Text>
                    <Form.File.Input
                      onChange={(e) => onFileChange(e)}
                      accept="image/*"
                      required
                    />
                  </Form.File>
                </div>
              </div>
            )}
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
              {loading ? "Loading..." : "Submit"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default UploadModal;
