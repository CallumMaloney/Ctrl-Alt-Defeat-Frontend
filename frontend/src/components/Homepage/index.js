import React from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import Header from "../Header/index";
import dummy from "../images/profile_photo/dummy.jpg";
import { getlistItemData } from "../../dummyData/listItemData";
import ListItem from "../ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

function Homepage({ city, updateSearchFilter }) {
    const [searchFilter, setSearchFilter] = React.useState(null);
    const matches = useMediaQuery("(min-width: 833px)");
    const matches2 = useMediaQuery("(min-width: 1279px) ");

    const handleSearchFilterChange = (searchFilter) => {
        setSearchFilter(searchFilter);
    };

    const listItemData = getlistItemData();
    console.log(listItemData);

    return (
        <div className="overlay">
            <Header
                sx={{ zIndex: 1 }}
                imageUrl={dummy}
                altText="My Image"
                location={city}
            />
            <div className="search">
                <SearchBar
                    sx={{ zIndex: 0 }}
                    handleSearchFilterChange={handleSearchFilterChange}
                />
            </div>
            <Box className="main__listItems" sx={{ flexGrow: 1 }}>
                <Grid className="main__listItems--grid" container spacing={2}>
                    {listItemData.map((item) => (
                        <Grid item xs={6} sm={4} md={3} key={item.id}>
                            <Link to="/guide/overview">
                                <ListItem title={item.guide_name} />
                            </Link>
                        </Grid>
                    ))}
                    {matches && (
                        <Grid item xs={12} sm={6} md={4}>
                            <ListItem />
                        </Grid>
                    )}
                    {matches2 && (
                        <Grid item xs={12} sm={6} md={4}>
                            {/* Add the contents for matches2 here */}
                        </Grid>
                    )}
                </Grid>
            </Box>
            <NavBar />
        </div>
    );
}

export default Homepage;

//get the data array out of getcity() function and then pass it to the homepage component as a prop and then map through it in the homepage component to display the data
