import React from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import { FromHook } from "../../ConstomHooks/formHook/FromHook";

const AddProduct = () => {
   const {handleInputChange,handleAddProduct}= FromHook({
    name:"",
    price:"",
    company:"",
    category:""
     })
  return (
    <Stack gap={2} className="col-3 mx-auto mt-5">
      <Card>
        <Card.Header>Add Product</Card.Header>
        <Card.Body>
          <Form onSubmit={handleAddProduct}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Product Name" name="name" onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Product Price" name="price" onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Product company" name="company" onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Product category" name="category" onChange={handleInputChange}/>
            </Form.Group>

            <Button variant="outline-secondary" type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Stack>
  );
};

export default AddProduct;
