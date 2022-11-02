import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchYouBikeDataAll } from "../store/actions";

const BikePage = () => {
    const dispatch = useDispatch();
    const [allDistricts, setDistricts] = useState(null);
    const [selectedDistrict, setSelectedDistrict] =
        useState("");
    const [searchkwd, setSearchkwd] = useState("");
    const [filteredSites, setFilteredSites] = useState([]);

    // dispatch fetch data
    useEffect(() => {
        dispatch(fetchYouBikeDataAll());
    }, [dispatch]);

    // get fetched data
    const youBikeDataAll = useSelector(
        (state) => state.initial.youBikeDataAll
    );

    // get all districts after fetch
    useEffect(() => {
        if (!youBikeDataAll) return;
        const districts = [
            ...new Set(youBikeDataAll.map((x) => x.sarea)),
        ];
        setDistricts(districts);
        setSelectedDistrict(districts[0]);
    }, [youBikeDataAll]);

    // handle select district
    const handleSelectDistrict = (e) => {
        setSelectedDistrict(e.target.value);
    };

    // handle input keyword
    const handleKwdInput = (e) => {
        setSearchkwd(e.target.value);
    };

    // handle search
    const filterData = () => {
        if (!searchkwd) {
            alert("請輸入關鍵字");
            return;
        }
        const filterZones = youBikeDataAll.filter(
            (x) => x["sarea"] === selectedDistrict
        );

        setFilteredSites(
            filterZones.filter(
                (x) =>
                    x.sna.includes(searchkwd) ||
                    x.ar.includes(searchkwd)
            )
        );
    };

    return (
        <div className="page bike-page">
            <h1 className="page-title">youBike駭客</h1>

            {/* input group */}
            <div className="flex rounded-[16px] w-full overflow-hidden px-[12px] py-[8px] bg-white mb-[24px]">
                {allDistricts && (
                    <select
                        value={selectedDistrict}
                        onChange={handleSelectDistrict}
                        className="max-w-[25%] mr-[8px]"
                    >
                        {allDistricts.map((district) => (
                            <option
                                value={district}
                                key={district}
                            >
                                {district}
                            </option>
                        ))}
                    </select>
                )}
                <input
                    type="text"
                    className="grow h-full"
                    placeholder="輸入路名或站點關鍵字"
                    value={searchkwd}
                    onChange={handleKwdInput}
                />
            </div>
            <button
                onClick={filterData}
                className="option-btn py-[12px]"
            >
                搜尋站點
            </button>

            {filteredSites.length > 0 && (
                <div className="mx-[48px]">
                    <div className="flex justify-center text-h2">
                        搜尋結果
                    </div>
                    <div>
                        {filteredSites.map((site) => (
                            <div
                                className="mb-[8px] text-white"
                                key={site.aren}
                            >
                                {site.sna}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BikePage;
