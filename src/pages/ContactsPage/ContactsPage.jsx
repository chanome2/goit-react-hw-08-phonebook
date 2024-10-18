import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Box, Typography } from "@mui/material";

const ContactsPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Phonebook</title>
            </Helmet>
            <Box sx={{ marginTop: "100px" }} >
                <ContactForm />
            </Box>

            <Box sx={{ marginTop: "50px" }}>
                <Typography sx={{display: "flex", color: "Background", justifyContent: "center"}} variant="h5">Contacts</Typography>
            
                <Filter />
            </Box>
            
            <Box>
                <ContactList />
            </Box>
        </HelmetProvider>
    );
};

export default ContactsPage;