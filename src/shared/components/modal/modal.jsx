import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomModal({ show, handleClose, children, size }) {
  return (
    <>
      <Modal centered size={size ? size : "md"} show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-bottom-0">
          {/* <Modal.Title>Mod</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default CustomModal;
