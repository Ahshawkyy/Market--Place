import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import Home from "@mui/icons-material/Home";

import Group from "@mui/icons-material/Group";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Storefront from "@mui/icons-material/Storefront";
import AccountBox from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        // @ts-ignore
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#FFA62F",

    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    // @ts-ignore
    ...theme.applyStyles("dark", {
      backgroundColor: "#2F58CD",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    // @ts-ignore
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    // @ts-ignore
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
// @ts-ignore

const Listt = ({ setmyMOde, theme, showList, setShowList }) => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.carttt);
  const myList = [
    { title: "Home Page", icon: <Home />, path: "/" },
    { title: "Market place", icon: <Storefront />, path: "/market" },
    {
      title: "Cart",
      icon: (
        <StyledBadge badgeContent={selectedProducts.length} color="error">
          <ShoppingCartIcon />
        </StyledBadge>
      ),
      path: "/cart",
    },
    { title: "Groups", icon: <Group />, path: "/Groups" },
    { title: "Friends", icon: <Person />, path: "/Friends" },
    { title: "Settings", icon: <Settings />, path: "/Settings" },
    { title: "Profile", icon: <AccountBox />, path: "/Profile" },
  ];
  const navigate = useNavigate();
  return (
    <Box
      className="bgc menud"
      sx={{
        minWidth: 180,
        flexGrow: 4,
        display: { xs: showList, md: "block" },
      }}
    >
      <List sx={{ position: "fixed" }}>
        {myList.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}

        <MaterialUISwitch
          onChange={() => {
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );

            setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
          }}
          sx={{ ml: 6, mt: 1 }}
          defaultChecked={theme.palette.mode === "dark"}
        />
      </List>
    </Box>
  );
};

export default Listt;
