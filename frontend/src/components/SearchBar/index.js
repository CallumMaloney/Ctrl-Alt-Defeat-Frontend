import * as React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useTheme } from "@mui/material/styles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchBar({
    setFilterClicked,
    filterClicked,
    chosenCity,
    selectedActivityTypes,
}) 

    {const theme = useTheme();

    function handleClick() {
        setFilterClicked(!filterClicked);
    }

    const filteredCity =
        selectedActivityTypes.length > 0
            ? chosenCity.filter((item) =>
                  selectedActivityTypes.includes(item.activityType)
              )
            : chosenCity;

    const handleSearchBarChange = (event) => {console.log(event);}
        
        // // const { value, checked } = event;
    //     if (checked) {
    //         setSelectedTitle((prevTypes) => [...prevTypes, value]);
    //     } else {
    //         setSelectedTitle((prevTypes) =>
    //             prevTypes.filter((type) => type !== value)
    //         );
    //     }
    //     console.log(selectedTitle);
    // };

    return (
        <Paper
            component="form"
            sx={{
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 60,
                width: "100%",
                px: 2,
                py: 1,
                mb: 2,
                [theme.breakpoints.up("sm")]: {
                    px: 4,
                },
                [theme.breakpoints.up("md")]: {
                    px: 6,
                },
                [theme.breakpoints.up("lg")]: {
                    px: 8,
                },
                [theme.breakpoints.up("xl")]: {
                    px: 10,
                },
            }}
        >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Autocomplete
                sx={{
                    flex: 1,
                    mr: 2,
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: 300,
                    },
                    [theme.breakpoints.up("lg")]: {
                        width: 400,
                    },
                    [theme.breakpoints.up("xl")]: {
                        width: 500,
                    },
                }}
                placeholder="Choose a guide"
                multiple
                id="checkboxes-tags-demo"
                options={filteredCity}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                            onChange={(event) => handleSearchBarChange(event)}
                        />
                        {option.title}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a Guide"
                        placeholder="Favorites"
                    />
                )}
            />
            <IconButton
                sx={{ p: "10px" }}
                aria-label="menu"
                onClick={handleClick}
            >
                <TuneIcon />
            </IconButton>
        </Paper>
    );
}
