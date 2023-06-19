import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import listItemData from "../../dummyData/listItemData";
import { useState } from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchBar({ handleSearchFilterChange }) {
    const [filterClicked, setFilterClicked] = useState(false);

    function handleChange(event) {
        handleSearchFilterChange(event.target.value);
    }

    function handleClick() {
        console.log("clicked");
        setFilterClicked(!filterClicked);
    }

    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 400,
                // backgroundColor: "pink",
                mt: 7.5,
                // mb: 20,
                // ml: 5,
                // mr: 5,
            }}
        >
            {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton> */}
            <Autocomplete
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    width: 200,
                    // backgroundColor: "green",
                }}
                placeholder="Choose a guide"
                multiple
                id="checkboxes-tags-demo"
                options={listItemData}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.title}
                    </li>
                )}
                style={{ width: 500 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a Guide"
                        placeholder="Favorites"
                    />
                )}
            />
            {/* <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Choose a guide"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={handleChange}
                
            /> */}
            <IconButton
                sx={{ p: "10px" }}
                aria-label="menu"
                onClick={handleClick}
            >
                <TuneIcon />
            </IconButton>
            <div>
                The button is <p>{filterClicked ? "clicked" : "not-clicked"}</p>
            </div>
        </Paper>
    );
}
