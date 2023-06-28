import React, { useState } from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import Header from "../Header/index";
import dummy from "../images/profile_photo/dummy.jpg";
import ListItem from "../ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

function Homepage({ city, chosenCity, setChosenCity }) {
    console.log(chosenCity);

    const [filterClicked, setFilterClicked] = useState(false);
    const matches = useMediaQuery("(min-width: 833px)");
    const matches2 = useMediaQuery("(min-width: 1279px) ");

    // This state variable keeps track of the selected activity types.
    const [selectedActivityTypes, setSelectedActivityTypes] = useState([]);

    //create a state variable to keep track of the selected title from drop down list
    const [selectedTitle, setSelectedTitle] = useState([]);

    //pass state down to search bar component
    //check to see if state gets updated when user selects a title from drop down list

    // This function handles the change event of a checkbox in the Autocomplete component.
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedActivityTypes((prevTypes) => [...prevTypes, value]);
        } else {
            setSelectedActivityTypes((prevTypes) =>
                prevTypes.filter((type) => type !== value)
            );
        }
    };

    
    // Filter the chosenCity array based on the selected activity types.
    // If there are selected activity types, filter the chosenCity array to include only items with matching activity types.
    // Otherwise, return the original chosenCity array.

    const filteredCity =
        selectedActivityTypes.length > 0
            ? chosenCity.filter((item) =>
                  selectedActivityTypes.includes(item.activityType)
              )
            : chosenCity;

    const handleFilterClick = () => {
        setFilterClicked(false);
    };

    return (
        <div className="overlay">
            {filterClicked && (
                <div className="modal-overlay">
                    <div className="filterBar">
                        <div className="filterBar__title">
                            <h1>Filter</h1>
                        </div>
                        <div className="filterBar__options">
                            <div className="filterBar__options--option">
                                <label htmlFor="foodanddrink">
                                    Food & Drink
                                </label>
                                <input
                                    type="checkbox"
                                    id="foodanddrink"
                                    name="foodanddrink"
                                    value="foodanddrink"
                                    onChange={handleCheckboxChange}
                                    checked={selectedActivityTypes.includes(
                                        "foodanddrink"
                                    )}
                                />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="sightseeing">Sightseeing</label>
                                <input
                                    type="checkbox"
                                    id="sightseeing"
                                    name="sightseeing"
                                    value="sightseeing"
                                    onChange={handleCheckboxChange}
                                    checked={selectedActivityTypes.includes(
                                        "sightseeing"
                                    )}
                                />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="historical">Historical</label>
                                <input
                                    type="checkbox"
                                    id="historical"
                                    name="historical"
                                    value="historical"
                                    onChange={handleCheckboxChange}
                                    checked={selectedActivityTypes.includes(
                                        "historical"
                                    )}
                                />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="nightlife">Nightlife</label>
                                <input
                                    type="checkbox"
                                    id="nightlife"
                                    name="nightlife"
                                    value="nightlife"
                                    onChange={handleCheckboxChange}
                                    checked={selectedActivityTypes.includes(
                                        "nightlife"
                                    )}
                                />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="nature">Nature</label>
                                <input
                                    type="checkbox"
                                    id="nature"
                                    name="nature"
                                    value="nature"
                                    onChange={handleCheckboxChange}
                                    checked={selectedActivityTypes.includes(
                                        "nature"
                                    )}
                                />
                            </div>
                            <div className="filterBar__options--option">
                                <label htmlFor="entertainment">
                                    Entertainment
                                </label>
                                <input
                                    type="checkbox"
                                    id="entertainment"
                                    name="entertainment"
                                    value="entertainment"
                                    onChange={handleCheckboxChange}
                                    checked={selectedActivityTypes.includes(
                                        "entertainment"
                                    )}
                                />
                            </div>
                        </div>
                        <button onClick={handleFilterClick}>Save</button>
                    </div>
                </div>
            )}

            <Header
                sx={{ zIndex: 12 }}
                imageUrl={dummy}
                altText="My Image"
                location={city}
                position="absolute"
            />
            <SearchBar
                sx={{ zIndex: 1 }}
                position="relative"
                setFilterClicked={setFilterClicked}
                filterClicked={filterClicked}
                handleCheckboxChange={handleCheckboxChange}
                // handleSearchBarChange={handleSearchBarChange}
                selectedActivityTypes={selectedActivityTypes}
                setSelectedActivityTypes={setSelectedActivityTypes}
                chosenCity={chosenCity}
                selectedTitle={selectedTitle}
                setSelectedTitle={setSelectedTitle}
            />

            <Box
                className="main__listItems"
                sx={{ position: "relative", top: 150, bottom: 150 }}
            >
                <Grid className="main__listItems--grid" container spacing={2}>
                    {filteredCity.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Link to={`/guide/${item._id}/overview`}>
                                <ListItem
                                    title={item.title}
                                    id={item._id}
                                    image={item.imageURL}
                                />
                            </Link>
                        </Grid>
                    ))}
                    {matches && <Grid item xs={12} sm={6} md={4}></Grid>}
                    {matches2 && (
                        <Grid item xs={12} sm={6} md={4}>
                            {/* Add the contents for matches2 here */}
                        </Grid>
                    )}
                </Grid>
            </Box>
            <div className="space"></div>

            <NavBar />
        </div>
    );
}

export default Homepage;

// conditional render, when filter is clicked, show subset of results
// add oncheck function to each checkbox
// inside the function, send a request to the backend to get the results filtered by activity type
// create state which shows default results & is updated when the filter is clicked
// set the state of the results to the filtered results
// render the results
