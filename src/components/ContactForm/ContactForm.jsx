import { useState } from "react";
// import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOperation";
import { selectContacts } from "../../redux/contacts/contactsSelector";
import { MuiTelInput } from "mui-tel-input";
import { Box, TextField, Button, FormControl } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';


export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const nameChangeEvent = e => {
        setName(e.target.value);
    };

    const numberChangeEvent = e => {
        setNumber(e);
    };

    const addContactSubmit = e => {
        e.preventDefault();

        if (name.trim() === "" || number.trim() === "") {
            return;
        }

        const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

        if (existingContact) {
            alert(`${name} is already in Phonebook!`);
            return;
        }

        //dispatch(addContact({ name: name, number: number }));
        dispatch(addContact({ name, number }));

        //reset form fields upon submitting
        setName("");
        setNumber("");
    };

    return (
        <>
        <Box sx={{marginTop: "100px"}}>
        <FormControl sx={{display: "flex", gap: "20px", marginTop: "50px"}}>
            
            <TextField
                sx={{backgroundColor: "#fffff699"}}
                variant="outlined"
                label="Name"
                value={name}
                onChange={nameChangeEvent}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                required
                />

            <MuiTelInput
                sx={{backgroundColor: "#fffff899"}}
                value={number}
                defaultCountry="UA"
                onChange={numberChangeEvent} />
        
            <Button
                variant="contained"
                sx={{ alignSelf: "center" }}
                        onClick={addContactSubmit} >Add Contact&nbsp;
            <PersonAddIcon />
            </Button>
                    
        </FormControl>
        </Box>
    </>
    )
};
