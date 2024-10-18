import { Helmet, HelmetProvider } from "react-helmet-async";
// import css from "./HomePage.module.css";
import { Box, Paper, Typography } from "@mui/material";

const HomePage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>HomePage</title>
            </Helmet>
            <Box>
                <Paper elevation={5}
                    sx={{ padding: "15px", marginTop: "65px", marginBottom: "20px", backgroundColor: "#fdf6f658", color: "black" }}>
            {/* <div className={css.container} > */}
                    {/* <h1 className={css.title} > */}
                    <Typography variant="h3" align="center" color= "white">Welcome to the Phonebook App</Typography>
                        
                    <Typography variant="subtitle1" paragraph>You are the new owner of a very reliable and convenient Phonebook App. A contacts storage system where you can seamlessly input name and phone number of your contact. Your Phonebook App also lets you easily manage and quickly find all your contacts with just a few taps.
                    </Typography>
                
                    <Typography variant="subtitle1" paragraph>Phonebook App is a user-friendly application designed to organize all your contacts. Explore and enjoy the efficiency of your Phonebook App.  Visit our <a style={{ fontSize: "bold", color: "blue"}} href="https://github.com/Mayotopia04">site</a> and don't hesitate to reach out to our <a style={{ fontSize: "bold", color: "blue"}} href="https://github.com/Mayotopia04/goit-react-hw-08-phonebook">support team</a> if you have any concerns.</Typography>
                    
                    <Typography variant="subtitle1" paragraph>Thank you for choosing Phonebook App!</Typography>
                
                </Paper>
            </Box>
        </HelmetProvider>
    );
};

export default HomePage;