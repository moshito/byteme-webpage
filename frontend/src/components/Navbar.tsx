"use client";

import { useState } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          component={Link}
          href="/"
          variant="h6"
          sx={{ textDecoration: "none", fontWeight: 700, color: "inherit" }}
        >
          <span style={{ opacity: 0.7 }}>{"<"}</span>
          {" Byte Me "}
          <span style={{ opacity: 0.7 }}>{"/>"}</span>
        </Typography>
        <IconButton
          color="inherit"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button component={Link} href="/om-oss" color="inherit">
            Om oss
          </Button>
          <Button component={Link} href="/stadgar" color="inherit">
            Stadgar
          </Button>
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/om-oss"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Om oss" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/stadgar"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Stadgar" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
