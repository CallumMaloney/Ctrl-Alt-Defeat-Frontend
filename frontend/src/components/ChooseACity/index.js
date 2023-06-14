import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ChooseACity() {
    return (
        <div className="overlay">
            <div className="header">
                <div className="header__title">
                    <h1>Neighbourhood Nomad</h1>
                </div>
                <div className="header__img--logo">
                    <img
                        className="logo__image"
                        src="../image/image-(2).png"
                        alt="logo"
                    />
                </div>
            </div>

            <div className="userInput">
                <input
                    className="userInput__input"
                    type="text"
                    placeholder="Choose your location..."
                ></input>
                <div>
                    <Link to={"home"}>
                        <button className="userInput__btn--randomiser">
                            {" "}
                            I'm feeling adventurous!
                        </button>
                    </Link>
                </div>
            </div>

            <div className="main">
                <div className="main__animated--globe"> globe</div>
                <button className="main__btn--submit"> EXPLORE CITY</button>
            </div>
        </div>
    );
}
export default ChooseACity;
