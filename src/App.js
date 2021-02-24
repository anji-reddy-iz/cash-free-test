import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import ModalFilter from './components/ModalFilter';


function App() {
  const defaultFields = [
    {
      id:0,
      type:"text",
      value:"",
      placeholder:"Name"
    },
    {
      id:1,
      type:"textarea",
      value:"",
      placeholder:"Address"
    },
    {
      id:2,
      type:"dropdown",
      value:"",
      data:[
        {value: "", label: 'Select'},
        {value: 1, label: 'India'},
        {value: 2, label: 'USA'},
        {value: 3, label: 'UK'},
        {value: 4, label: 'Germany'},
        {value: 5, label: 'Russia'},
        {value: 5, label: 'Italy'}
      ]
    },
    {
      id:3,
      type:"checkbox",
      value:false,
      placeholder:"Show out of stock products"
    },
    {
      id:4,
      type:"radio",
      value:"",
      data:[
        {value: "Brand 1"},
        {value: "Brand 2"},
        {value: "Brand 3"}
      ],
      placeholder:'Brands',
      groupName:'brands'
    }
  ];
  const [filtersCount, setFiltersCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fields, setFields] = useState(defaultFields);
  
  const modalClearAll = () => {
    setFiltersCount(0);
    setFields(defaultFields);
    setShowModal(false);
  }

  const modalApplyFilter = (updatedFields) => {
    let changedFields = 0;
    updatedFields.map( (field, i) => {
      if( defaultFields[i].value != field.value ){
        changedFields += 1;
      }
    });
    setFields(updatedFields);
    setFiltersCount(changedFields);
    setShowModal(false);
    
  }

  const modalClose = () => {
    setShowModal(false);
  }


  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col >
          <Button variant="primary" onClick={() => setShowModal(true)} >Filters { filtersCount }</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          { showModal && <ModalFilter fields={fields} modalClose={modalClose} modalClearAll={modalClearAll} modalApplyFilter={modalApplyFilter} /> }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
