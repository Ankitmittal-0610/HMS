import React from "react";
import { Modal, Button, DropdownButton, Dropdown } from "react-bootstrap";

const PaymentStatusModal = (props) => {
  const {show ,paymentStatus,setPaymentStatus,UpdatePatientPaymentStatus,handleClose,SetDataChangeFlag,setPaymentStatusModalFlag} = props;
  
  const updateStatus = () => {
    console.log("inside update paymentStatus Modal-->"+paymentStatus)
    setPaymentStatusModalFlag(true);
    handleClose();
    SetDataChangeFlag(true);
    UpdatePatientPaymentStatus();
  };

  return (
    <div className="">
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
       
        <Modal.Header closeButton>
          <Modal.Title>update Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <DropdownButton size="sm" title={paymentStatus ? paymentStatus:"select payment status"} variant="warning">
            <Dropdown.Item>
              <div onClick={(e) => { setPaymentStatus(e.target.innerText);}}>paid </div>
            </Dropdown.Item>
            
            <Dropdown.Item>
              <div onClick={(e) => { setPaymentStatus(e.target.innerText);}} >pending</div>
            </Dropdown.Item>
          </DropdownButton>
        </Modal.Body>

        <Modal.Footer>
          <div style={{ position: "relative", left: "-120px" }}>
            <Button size="sm" variant="warning" onClick={handleClose}>Go back</Button>
          </div>

          <Button size="sm" variant="success" onClick={updateStatus}>Update Status</Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
};

export default PaymentStatusModal;
