import { initActions } from "./index";

export const fetchYouBikeDataAll = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
            );

            if (!response.ok) {
                throw new Error("bbq");
            }

            const data = await response.json();

            return data;
        };

        const uBikeData = await fetchData();

        dispatch(initActions.setYouBikeDataAll(uBikeData));
    };
};
