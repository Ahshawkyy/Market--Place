import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";

import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useTheme } from "@emotion/react";


const Home = () => {

  const myPosts = [
    {
      letter: "A",
      color: "#384B70",
      userName: "Ahmed Shawky",
      img: "https://images.pexels.com/photos/2273580/pexels-photo-2273580.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "K",
      color: "#507687",
      userName: "Mohamed Ali",
      img: "https://images.pexels.com/photos/817916/pexels-photo-817916.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "V",
      color: "#FCFAEE",
      userName: "Mido Elsayed",
      img: "https://images.pexels.com/photos/89442/pexels-photo-89442.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "X",
      color: "#B8001F",
      userName: "Ibrahem Gomaa",
      img: "https://images.pexels.com/photos/16840499/pexels-photo-16840499/free-photo-of-couple-using-instagram-in-car.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "N",
      color: "#091057",
      userName: "Fahd Elsyaad",
      img: "https://images.pexels.com/photos/13397070/pexels-photo-13397070.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "Q",
      color: "#024CAA",
      userName: "Hamdy Sameh",
      img: "https://images.pexels.com/photos/5263085/pexels-photo-5263085.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "P",
      color: "#EC8305",
      userName: "Yousef Joo",
      img: "https://images.pexels.com/photos/7930487/pexels-photo-7930487.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "Y",
      color: "#DBD3D3",
      userName: "Cap. Nader",
      img: "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>
        Love
        <FavoriteIcon sx={{ ml: "125px" }} />
      </MenuItem>

      <MenuItem onClick={handleClose}>
        Share
        <ShareIcon sx={{ ml: "120px" }} />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        BookMark
        <BookmarkIcon sx={{ ml: "90px" }} />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        Turn Off Notifications
        <NotificationsOffIcon sx={{ ml: "5px" }} />
      </MenuItem>
    </Menu>
  );
  const theme = useTheme();
  return (
    <>
      <Box  sx={{ flexGrow: 4 }} >
        {myPosts.map((item) => (
          <Card
          sx={{ maxWidth: { xs: "97%", sm: 600 }, mx: "auto", my: 5 , mr: "-240px"}}
          key={item.letter}
            className="media"
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    // @ts-ignore
                    color: theme.palette.getContrastText(item.color),
                    bgcolor: item.color,
                  }}
                  aria-label="recipe"
                >
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="October 26, 2024"
            />
            <CardMedia component="img" height="194" image={item.img} alt="" />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Box flexGrow={1} />

              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon sx={{ color: "orange" }} />}
              />
            </CardActions>
          </Card>
        ))}

        {renderMenu}
      </Box>


          <Box
         sx={{
        minWidth: 516,
        display: { xs: "none", lg: "block" },
        flexGrow: 0.5,
        ml: "300px",
    
        
      }}
      // className="bgc"
      component={"section"}
    >
      <Box position={"fixed"}>
        <Typography variant="h6" sx={{ fontWeight: 300, ml: 2 }} mt={2}>
          Online Friends
        </Typography>

        <AvatarGroup total={24} sx={{ justifyContent: "start", ml: 3 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com//static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com//static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com//static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com//static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" sx={{ fontWeight: 300, ml: 2 }} mt={2}>
          Last Picture
        </Typography>

        <ImageList
          sx={{ width: 475, height: 100, overflowY: "hidden", ml: 2 }}
          cols={3}
          rowHeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" sx={{ fontWeight: 300, ml: 2 }} mt={2}>
          Lastest Conversation
        </Typography>

        <List
          sx={{
            width: "100%",
            maxWidth: 490,
            bgcolor: "background.paper",
            mt: 2,
            ml: 2,
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com//static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://mui.com//static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com//static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>  

      
    </>
  );
};

export default Home;
