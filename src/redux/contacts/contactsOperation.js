import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const styleOptions = {
    position: "bottom-center",
    duration: 6000,
}

// GET @/contacts
export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// POST @/contacts
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, number });
            toast.success("Contact is successfully added!", styleOptions);
            return response.data;
        } catch (error) {
            toast.error("Please enter a valid name and number, muchas gracias", styleOptions);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//PATCH @/contacts
export const updateContact = createAsyncThunk("contacts/updateContact",
    async ({ id, name, number }, thunkAPI) => {
        try {
            const response = await axios.patch(`/contacts/${id}`, { name, number });
            toast.success("Contact is successfully updated!", styleOptions);
            return response.data;
        } catch (error) {
            toast.error("Please enter a valid name and number, muchas gracias", styleOptions);
            return thunkAPI.rejectWithValue(error.message);
        }      
    }
);

// DELETE @/contacts/:id
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            toast.success("Sayonara homey, that's a delete", styleOptions);
            return response.data;
        } catch (error) {
            toast.error("Contacts from Uranus can not be pooped out", styleOptions);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);