import * as React from "react";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import logo from "../public/Astral-logo-2.png";
import Image from "next/image";
import AuthModal from "./Authentication/AuthModal";
import Autocomplete from "./Autocomplete";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "black",
            justifyContent: "space-between",
            padding: 0.75,
          }}
        >
          <Link href="/">
            <a>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={props.resetPageNum}
              >
                <Image
                  src={logo}
                  alt="Astral Finance Logo"
                  width={50}
                  height={50}
                  sx={{
                    paddingLeft: 0,
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  fontFamily="inherit"
                  fontWeight={900}
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  ASTRAL
                </Typography>
              </Box>
            </a>
          </Link>
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <Autocomplete formatDollar={props.formatDollar} />
          </Box>
          <AuthModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
