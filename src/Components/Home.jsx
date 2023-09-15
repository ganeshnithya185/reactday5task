import React, { useState, useContext } from "react";
// import { myContext } from "../App"; // Correct the import path

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import { TbBaselineDensitySmall } from "react-icons/tb";

const Home = () => {
  const { jsonData, SetjsonData } = useContext(myContext);
  const [show, setShow] = useState(false);
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [feedbacks, SetFeedbacks] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleAddcard = () => {
    const newCard = {
      title: title,
      description: description,
      feedbacks: feedbacks,
    };

    // Create a copy of the jsonData array and add the new card
    const updatedData = [...jsonData, newCard];

    // Update the context with the new data
    SetjsonData(updatedData);

    handleClose();
    navigate("/card");
  };

  return (
    <>
      <div className="container m-2">
        <Button variant="primary" onClick={handleShow}>
          Notes App
        </Button>

        <div className="notes">
          <h2>
            <TbBaselineDensitySmall />
            Notes
          </h2>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                placeholder="Title"
                value={title}
                onChange={(e) => SetTitle(e.target.value)}
                as="textarea"
                rows={3}
              />
              <Form.Control
                placeholder="Add a description"
                value={description}
                onChange={(e) => SetDescription(e.target.value)}
                as="textarea"
                rows={3}
              />
              <Form.Control
                placeholder="Add a Feedbacks"
                value={feedbacks}
                onChange={(e) => SetFeedbacks(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Edit
          </Button>
          <Button variant="primary" onClick={handleAddcard}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
