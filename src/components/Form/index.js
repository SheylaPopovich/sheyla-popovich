import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/sheylapopovich@gmail.com"
      method="POST"
      class="shadow p-3 mb-3 bg-body rounded align-self-center w-50"
    >
      <Form.Group
        className="mb-3 justify-content-center "
        controlId="exampleForm.ControlInput1"
      >
        <h1 class="formTitles pb-2">Contact Me</h1>

        <div class="row mb-3">
          <Form.Label className="formTitles col-md-2">Name: </Form.Label>
          <div class="col-md-10">
            <input type="text" name="name" required class="pb-2" />
          </div>
        </div>

        <div class="row mb-3">
          <Form.Label className="formTitles col-md-2">Email: </Form.Label>
          <div class="col-md-10">
            <input type="email" name="email" required />
          </div>
        </div>
      </Form.Group>

      <Form.Group className="row mb-3 pe-4 ps-4">
        <textarea
          name="textarea"
          placeholder="Message me here"
          class="mb-2 "
        ></textarea>
        <button type="submit" class="btn btn-primary">
          Send
        </button>
      </Form.Group>
    </form>
  );
}

export default ContactForm;
