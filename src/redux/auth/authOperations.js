import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const toastOptions = { position: "bottom-left", duration: 6000, color: "violet" };

// utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

// POST @ /users/signup
// body: { name, email, password }
export const register = createAsyncThunk(
    "auth/register",
    async ({ name, email, password }, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", { name, email, password });

            // after successful registration, add the token to the HTTP header 
            setAuthHeader(response.data.token);
            toast.success("You have successfully signed up", toastOptions );
            return response.data;
        } catch (error) {
            toast.error("This email is already registered!", toastOptions);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// POST @ /users/login
// body: { email, password } 
export const logIn = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", { email, password });
            // after successful login, add the token to the HTTP header 
            setAuthHeader(res.data.token);
            toast.success("Welcome back bitch. Enjoy your Phonebook.", toastOptions);
            return res.data;
        } catch (error) {
            toast.error("Email and password did not match, please try again.", toastOptions);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// POST @ /users/logout
// headers: Authorization: Bearer token
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("users/logout");
        // after a successful logout, remove the token from the HTTP header 
        toast.success("Adios Mothertrucker!", toastOptions);
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

//GET @ /users/current
//headers: Authorization: Bearer token

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            //if there is no token, exit without performing any request
            return thunkAPI.rejectWithValue("Unable to process request");
        }

        try {
            // if there is a token, add it to the HTTP header and perform the request
            setAuthHeader(persistedToken);
            const res = await axios.get("/users/current");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
