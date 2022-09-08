import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="page index">
            <h1 className="white page-title">生活駭客</h1>

            <div className="option-btn lg">
                <Link to={"/transportation"}>無情開走</Link>
            </div>
            <div className="option-btn lg">無情開練</div>
        </div>
    );
};

export default Index;
