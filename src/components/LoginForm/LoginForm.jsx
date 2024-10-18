import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";
// import css from "./LoginForm.module.css";
import { Box, TextField, Button, FormControl, InputAdornment } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login'; 
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            
            })
        );
    
        form.reset();
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    marginTop: "150px", marginBottom: "100px"
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <FormControl sx={{display: "flex", flexDirection: "column", rowGap: "10px" }}>
                {/* , display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: "10px" */}
                <TextField sx={{backgroundColor: "#fdf6f658"}}
                    label="Email" variant="outlined" name="email"
                    InputProps={{endAdornment: (
                    <InputAdornment position="end">
                    <EmailIcon />
    </InputAdornment>
)}}
                    
                    />
                
                <TextField sx={{backgroundColor: "#fdf6f658"}}
                        label="Password" variant="outlined" name="password"
                    InputProps={{endAdornment: (
                    <InputAdornment position="end">
                    <LockIcon />
    </InputAdornment>
)}}
                    />
                        
                <Button variant="contained" type="submit" >
                        <LoginIcon />
                        &nbsp;Log In</Button>
                </FormControl>
            </Box>
            </>
    );

};
