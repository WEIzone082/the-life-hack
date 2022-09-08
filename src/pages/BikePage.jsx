import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchYouBikeDataAll } from "../store/actions";

const BikePage = () => {
    const dispatch = useDispatch();
    const youBikeDataAll = useSelector((state) => state.initial.youBikeDataAll);

    useEffect(() => {
        dispatch(fetchYouBikeDataAll());
    }, [dispatch]);

    const printData = () => {
        console.log(youBikeDataAll[0]);
    };

    return (
        <div className="page bike-page">
            <h1 className="white page-title">youBike駭客</h1>
            <button onClick={printData}>print</button>
        </div>
    );
};

export default BikePage;
