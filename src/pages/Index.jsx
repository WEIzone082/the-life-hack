import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="page index center-content">
            <main>
                <div className="page-title text-h1">
                    生活駭客
                </div>

                <div className="option-btn lg">
                    <Link to={"/transportation"}>
                        無情開走
                    </Link>
                </div>
                <div className="option-btn lg">
                    無情開練
                </div>
            </main>
        </div>
    );
};

export default Index;
