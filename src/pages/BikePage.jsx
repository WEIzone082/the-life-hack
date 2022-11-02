import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchYouBikeDataAll } from "../store/actions";

const BikePage = () => {
    const dispatch = useDispatch();
    const youBikeDataAll = useSelector(
        (state) => state.initial.youBikeDataAll
    );

    useEffect(() => {
        dispatch(fetchYouBikeDataAll());
    }, [dispatch]);

    const printData = () => {
        console.log(youBikeDataAll);
    };

    return (
        <div className="page bike-page">
            <h1 className="page-title">youBike駭客</h1>
            <button
                onClick={printData}
                className="option-btn"
            >
                print
            </button>
        </div>
    );
};

export default BikePage;
