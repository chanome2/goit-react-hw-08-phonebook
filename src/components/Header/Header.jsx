import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
// import css from "./Header.module.css";
import { AppBar, Toolbar } from "@mui/material";

export const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <AppBar sx={{backgroundColor: "#62487bae"}} >
                <Toolbar sx={{ justifyContent: "center", color: "white" }}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Toolbar>      
            </AppBar >
        </>
    );
};