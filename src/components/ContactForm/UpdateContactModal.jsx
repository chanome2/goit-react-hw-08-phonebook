import { Button, Box, TextField, Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "redux/contacts/contactsOperation";
import { useDisclosure } from "./ContactForm";

const UpdateContactModal = () => {
    // const contact = useContact();
    const dispatch = useDispatch();
    const [newName, setNewName] = useState("name");
    const [newNumber, setNewNumber] = useState("number");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleEdit = () => {
        onOpen();
    };

    const handleSave = () => {
        onClose();
        dispatch(updateContact({ name: newName, number: newNumber }));
        //toast alert "contact successfully updated"
    };

    const handleCancel = () => {
        // setShowModal(false);
        onClose();
    };

    const nameChangeEvent = (e) => {
        setNewName(e.target.value);
    };

    const numberChangeEvent = (e) => {
        setNewNumber(e.target.value);
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={handleEdit}>Edit</Button>
            <Modal isOpen={isOpen}>
            <Box component="form" autoComplete="off">
                <TextField variant="outlined" label="name" onChange={nameChangeEvent}></TextField>
                    
                <TextField variant="outlined" label="number" onChange={numberChangeEvent}></TextField>
            </Box>
                
                <Button variant="contained" onClick={handleSave}>Save</Button>
                
                <Button variant="contained" onClick={handleCancel}>Cancel</Button>
            </Modal>
            
        </>
    )

};

export default UpdateContactModal;
