import React, { useState } from "react";
import "./style.css";
import { Form } from "react-bootstrap";

function ContactForm() {
  return (
    <Form className="shadow p-3 mb-3 bg-body rounded align-self-center w-50">
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h1 class="formTitles">Contact Me</h1>
      <Form.Label class="formTitles">Name</Form.Label>
      <Form.Control type="email" placeholder="Your Name" />
      <br>
      </br>
        <Form.Label class="formTitles">Email address</Form.Label>
        <Form.Control type="email" placeholder="Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control placeholder="Message me here" as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
