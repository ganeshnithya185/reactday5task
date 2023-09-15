import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { myContext } from "../App";

const Cardisplay = () => {
  const { jsonData, SetjsonData } = useContext(myContext);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editedCard, setEditedCard] = useState({
    title: "",
    description: "",
    feedbacks: "",
  });

  const handleDelete = (index) => {
    const updatedCard = [...jsonData];
    updatedCard.splice(index, 1);
    SetjsonData(updatedCard);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowModal(true);
    setEditedCard(jsonData[index]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditedCard({ title: "", description: "", feedbacks: "" });
  };

  const handleSaveEdit = () => {
    const updatedData = [...jsonData];
    updatedData[editIndex] = editedCard;
    SetjsonData(updatedData);
    setShowModal(false);
    setEditedCard({ title: "", description: "", feedbacks: "" });
    setEditIndex(null);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {jsonData.map((item, index) => (
            <div className="col-3 d-flex" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.feedbacks}</Card.Text>
                  <Button variant="success" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={editedCard.title}
              onChange={(e) =>
                setEditedCard({ ...editedCard, title: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              value={editedCard.description}
              onChange={(e) =>
                setEditedCard({ ...editedCard, description: e.target.value })
              }
              rows={3}
            />
            <input
              type="text"
              placeholder="Feedbacks"
              value={editedCard.feedbacks}
              onChange={(e) =>
                setEditedCard({ ...editedCard, feedbacks: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cardisplay;
