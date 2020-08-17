import React from "react";
import { Button, Form } from "react-bootstrap";

import "./form.css";

const UploadForm = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Add image caption</Form.Label>
          <Form.Control type="text" required />
          <Form.Text className="text-muted">
            Please enter image caption
          </Form.Text>
        </Form.Group>
      </Form>
      <Form>
        <div className="mb-3 image-upload">
          <Form.File id="formcheck-api-regular">
            <Form.File.Input required />
          </Form.File>
          <Button variant="success" type="submit">
            Upload
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UploadForm;
