import { Box, Typography, BottomNavigation } from '@mui/material';
// import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <BottomNavigation sx={{ backgroundColor: '#62487bae' }}>
        <Box sx={{ position: 'static' }}>
          <Typography
            sx={{
              color: 'white',
              justifyContent: 'center',
              height: '50px',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            &copy; {new Date().getFullYear()} | Developed by &nbsp;
            <a
              style={{ fontSize: 'bold', color: 'lightgreen' }}
              href="chanome2.github.io/goit-react-hw-08-phonebook"
            >
              chanome2
            </a>
            &nbsp; of GoIT Global🧡
          </Typography>
        </Box>
      </BottomNavigation>
    </>
  );
};
