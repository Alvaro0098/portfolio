import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#83a4d4",
          backgroundImage: "linear-gradient(180deg, #83a4d4 0%, #b6fbff 100%)",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Álvaro Garcés
          </Typography>
          <Button color="inherit">Acerca de mi</Button>
          <Button color="inherit">Proyectos</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
