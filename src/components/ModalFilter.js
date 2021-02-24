import React, {useState} from 'react'
import { Container, Row, Col, Button, Modal, NavItem } from 'react-bootstrap';
import Dropdown from './Dropdown';
import InputFields from './InputFields';
import Checkbox from './Checkbox';
import Radiobutton from './Radiobutton';


function ModalFilter({fields, modalClose, modalClearAll, modalApplyFilter}) {

    const [showm, setShow] = useState(true);
    const [text, setText] = useState("");
    // const [textArea, setTextArea] = useState("");
    const [updatedFields, setUpdatedFields] = useState(fields);

    const handleClose = () =>{
        setShow(false);
        modalClose();
    }

    const handleClear = () =>{
        setShow(false);
        modalClearAll();
    }

    const handleApply = () =>{
        setShow(false);
        modalApplyFilter(updatedFields);
    }
    
    const handleChange = (key) => (value) => {
      setUpdatedFields( updatedFields => {
        const field = updatedFields.map((item, j) => {
          if (j === key) {
            item.value = value;
            return item;
          } else {
            return item;
          }
        });
   
        return field;
      });
    };

    return (
        <Modal show={showm} onHide={handleClose}>
            <Modal.Header >
              <Modal.Title>Select filters</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  
                  {updatedFields.map(item => (
                    
                    (item.type == "text" || item.type == "textarea") ? (
                      <InputFields
                      key={item.id}
                      value={item.value}
                      type={item.type}
                      placeholder={item.placeholder}
                      onChange={handleChange(item.id)}
                    /> 
                    ) : (
                      item.type == "dropdown" ? (
                        <Dropdown
                          value={item.value}
                          data={item.data}
                          onChange={handleChange(item.id)}
                        />
                      ) : (
                        item.type == "checkbox" ? (
                          <Checkbox 
                            label={item.placeholder}
                            selected={item.value}
                            onChange={handleChange(item.id)}
                          />
                        ) : (
                          item.type == "radio" && (
                            <Radiobutton
                              groupName={item.groupName}
                              placeholder={item.placeholder}
                              value={item.value }
                              options={item.data}
                              onChange={handleChange(item.id)}
                            />
                          )
                        )
                      )
                    )

                    
                  ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClear}>
                Clear All
              </Button>
              <Button variant="primary" onClick={handleApply}>
                Apply Filter
              </Button>
            </Modal.Footer>
          </Modal>
    )
}

export default ModalFilter

