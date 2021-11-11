import React, { useState } from "react";
//import "./style.css";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <Form className="shadow p-3 mb-3 bg-body rounded align-self-center w-50">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
