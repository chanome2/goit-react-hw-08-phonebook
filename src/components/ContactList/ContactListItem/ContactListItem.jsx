// import css from "./ContactListItem.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../../redux/contacts/contactsOperation";
import { Button, Modal, Box, FormControl, TextField, Typography, InputAdornment, ListItem, ListItemText, ListItemButton, List } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

export const ContactListItem = ({ filteredContact }) => {
    
    const dispatch = useDispatch();
    const [name, setName] = useState(filteredContact.name);
    const [number, setNumber] = useState(filteredContact.number);
    const [onOpen, setOnOpen] = useState(false);

    const style = {
    position: 'absolute',
    top: '50%',
        left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#69587bee',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    };

    const nameChangeEvent = e => {
        setName(e.target.value);
    }; 

    const numberChangeEvent = e => {
        setNumber(e);
    };

    //handleDelete method
    const handleDelete = () => {
        dispatch(deleteContact(filteredContact.id));
    };

    // handleEdit method
    const handleEdit = () => {
        setOnOpen(!onOpen);
        
    };

    const handleUpdate = () => {
        setOnOpen(!onOpen);
        dispatch(updateContact({ id: filteredContact.id, name, number }));
    };

    return (
        <>
            <Box sx={{ color: "white", border: "1px solid white", padding: "0"}}>
        <List sx={{padding: "0", paddingLeft: "10px"}}>
                    <ListItem sx={{gap: "10px" }}
                        disablePadding>        
        {/* <li className={css.contactListItem}> */}
                    <ListItemText primary={filteredContact.name} />
                        
                        {/* {filteredContact.name}:</ListItemText> */}
                        
            <ListItemText primary={filteredContact.number}>{filteredContact.number}</ListItemText>
            
            <ListItemButton sx={{gap: "10px", display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleDelete}>
                <DeleteIcon />
            </Button>
            <Button variant="contained" onClick={handleEdit}>Edit
                <EditIcon />
            </Button></ListItemButton>
            
            
<Modal
    open={onOpen}
    onClose={false}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
        
    <Box sx={style}>
        <Typography sx={{color: "white", display: "flex", justifyContent: "center"}} variant="h5">Update Contact</Typography>
        
        <FormControl sx={{ display: "flex", gap: "20px", marginTop: "50px" }}>
                                
        <TextField 
            variant="outlined"
            label="Name"
            value={name}
            onChange={nameChangeEvent}
            InputProps={{endAdornment: (
            <InputAdornment position="end">
            <ContactPhoneIcon />
            </InputAdornment>
            )}}                       
        />

        <MuiTelInput value={number} onChange={numberChangeEvent} />
                            
        <Button variant="contained" sx={{alignSelf: "center"}} onClick={handleEdit} >Cancel</Button>
        <Button variant="contained" sx={{ alignSelf: "center" }} type="submit" onClick={handleUpdate}>&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;</Button> 
        </FormControl>
    </Box>
</Modal>

                {/* </li> */}
            
            </ListItem></List>
        </Box>
        </>
    );
};

ContactListItem.propTypes = {
    filteredContact: PropTypes.object.isRequired,
};