// import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filterSlice";
import { selectFilter } from "../../redux/filter/filterSelector";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    //filter name based on the search keyword
    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
        
    };

    return (
        <>
            <Box sx={{color: "white", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "15px"}}>
            
            <Typography variant="h6" sx={{display: "flex", justifyContent: "center"}}>Find Contacts by Name</Typography>
                <TextField
                    sx={{ backgroundColor: "#fdf6f658" }}
                    variant="outlined"
                    label="Enter name to search..."
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={handleFilterChange}
                InputProps={{endAdornment: (
                    <InputAdornment position="end">
                    <ContactPhoneIcon />
                    </InputAdornment>
                )}}
                    />
            </Box>
        </>
    );
};