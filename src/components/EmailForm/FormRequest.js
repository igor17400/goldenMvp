import React, { useState } from "react";
import { Form, Button } from "reactstrap";

const FormRequest = () => {

    const submitRequest = async (e) => {
        e.preventDefault();
        console.log({ email, message });
        const response = await fetch("/access", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ email, message }),
        });
        const resData = await response.json();
        if (resData.status === "success") {
            alert("Message Sent.");
            this.resetForm();
        } else if (resData.status === "fail") {
            alert("Message failed to send.");
        }
    };

    return (
        <div className="text-center subscribe-form mt-5">
            <Form onSubmit={submitRequest}>
                <input type="text" placeholder="Email" name="email" />
                <Button color="none" type="submit" className="btn-primary">
                    Me inscrever!
                </Button>
            </Form>
        </div>
    );
};

export default FormRequest;
