import React from "react";
import NavBar from "../NavBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./styles.css";
import profileImg from "../../assets/profileImg.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

function ProfilePage() {
    const iconStyle = {
        fontSize: "36px",
    };

    const buttonStyle = {
        backgroundColor: "white",
        border: "none",
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1, { replace: false });
    };

    return (
        <div className="profileOverlay">
            <div className="profileHeader">
                <div className="profileHeader__btn--back">
                    <NavLink to="/guide" activeClassName="active">
                        <button
                            variant="text"
                            style={buttonStyle}
                            onClick={handleClick}
                        >
                            <KeyboardBackspaceIcon style={iconStyle} />
                        </button>
                    </NavLink>
                </div>

                <div className="profileHeader__btn--addGuide">
                    <button variant="text" style={buttonStyle}>
                        <AddBoxOutlinedIcon style={iconStyle} />
                    </button>
                </div>
            </div>
            <div className="profile">
                <div className="profile__title--profileName">
                    <h1>Bob Smith</h1>
                </div>

                <div className="profile__img--profileImg">
                    <img src={profileImg} alt="profileImg" />
                </div>
                <div className="profile__btn--editProfile">
                    <Link to="/ProfilePage/edit">
                        <button>Edit Profile</button>
                    </Link>
                </div>
            </div>

            <div className="middleNavBar">
                <div className="middleNavBar__btn--overview">
                    <NavLink
                        to={`/ProfilePage/about`}
                        activeClassName="active"
                        className="guideActive"
                    >
                        <button>About</button>
                    </NavLink>
                </div>
                <div className="middleNavBar__btn--experience">
                    <NavLink
                        to={`/ProfilePage/interests`}
                        activeClassName="active"
                        className="guideActive"
                    >
                        <button>Interests</button>
                    </NavLink>
                </div>
                <div className="middleNavBar__btn--reviews">
                    <NavLink
                        to={`/ProfilePage/guides`}
                        activeClassName="guideactive"
                        className="guideActive"
                    >
                        <button>Guides</button>
                    </NavLink>
                </div>
            </div>
            <Outlet />
            <NavBar />
        </div>
    );
}

export default ProfilePage;
