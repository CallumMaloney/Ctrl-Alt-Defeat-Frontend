import React from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import Header from "../Header/index";
import dummy from "../images/profile_photo/dummy.jpg";
import ListItem from "../ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from '@mui/material/useMediaQuery'



function Homepage() {
  const matches = useMediaQuery('(min-width: 833px)');
  const matches2 = useMediaQuery('(min-width: 1279px) ');

  return (
    <div className="overlay">
      <div className="header">
        <Header imageUrl={dummy} altText="My Image" location="London" />
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <div className="main">
        <div className="main__list">
          <Box className="main__listItems" sx={{ flexGrow: 1 }}>
            <Grid className="main__listItems--grid" container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ListItem />
              </Grid>

              {matches && (
                <Grid item xs={12} sm={6} md={4}>
                  <ListItem />
                </Grid>
              )}

              {matches2 && (
                <Grid item xs={12} sm={6} md={4}>
        
                </Grid>
              )}
            </Grid>
          </Box>
        </div>
      </div>
      <div className="footer">
        <NavBar />
      </div>
    </div>
  );
}

export default Homepage;

