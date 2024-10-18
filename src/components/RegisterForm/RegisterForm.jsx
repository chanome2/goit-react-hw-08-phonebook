import { useDispatch } from "react-redux";
// import { useState } from "react";
import { register } from "../../redux/auth/authOperations";
// import css from "./RegisterForm.module.css";
import { Box, Button, FormControl, TextField, InputAdornment } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
// import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
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
                <FormControl sx={{display: "flex", flexDirection: "column", rowGap: "10px", justifyContent: "center"}}>
                    <TextField sx={{backgroundColor: "#fdf6f658"}}
                    label="Username"
                    variant="outlined"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                    required
                    InputProps={{endAdornment: (
                    <InputAdornment position="end">
                    <AccountCircleIcon />
                    </InputAdornment>
                    )}}    
                    />
                
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
                        <HowToRegIcon />
                        &nbsp;Register</Button>
                </FormControl>
        </Box>
        </>    
    )
};










        // <>
        //     <Box sx={{ marginTop: "100px", marginBottom: "100px", direction: "column", justifyContent: "center", alignItems: "center" }}>
                
        //         <FormControl sx={{ marginTop: "10px", alignItems: "center" }} variant="outlined">
        //             <InputLabel>You-sername</InputLabel>
        //             <OutlinedInput
        //                 value="name"
        //                 endAdornment={<InputAdornment position="end">
        //                     <IconButton>
        //                         <AccountCircleIcon />
        //                     </IconButton>
        //                 </InputAdornment>}
        //                 label="You-sername"
        //                 // value={name}
        //             /> 
        //         </FormControl>

        //         <FormControl sx={{ marginTop: "10px", alignItems: "center"}} variant="outlined">
        //             <InputLabel>Email</InputLabel>
        //             <OutlinedInput
        //                 value="email"
        //                 endAdornment={<InputAdornment position="end">
        //                     <IconButton>
        //                         <EmailIcon />
        //                     </IconButton>
        //                 </InputAdornment>}
        //                 label="Email"
        //             /> 
        //         </FormControl>

        //         <FormControl sx={{ marginTop: "10px", alignItems: "center"}} variant="outlined">
        //             {/* <form className={css.form} onSubmit={handleSubmit} autoComplete="off" > */}
        //             <InputLabel>PasswordStuff</InputLabel>
        //             <OutlinedInput
        //                 value="password"
        //                 type={showPassword ? "text" : "password"}
        //                 endAdornment={
        //                     <InputAdornment position="end">
        //                         <IconButton
        //                             aria-label="toggle password visibility"
        //                             onClick={handleClickShowPassword}
        //                             edge="end"
        //                         >
        //                             {showPassword ? <VisibilityOff /> : <Visibility />}

        //                         </IconButton>
        //                     </InputAdornment>
        //                 }
        //                 label="PasswordStuff"
        //             />
        //             </FormControl>
                    
        //         <Box sx={{ marginTop: "20px"}}>
            