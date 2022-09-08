import { createSlice, configureStore } from "@reduxjs/toolkit";

const initSlice = createSlice({
    name: "init",
    initialState: { youBikeDataAll: null },
    reducers: {
        setYouBikeDataAll(state, action) {
            state.youBikeDataAll = action.payload;
        },
    },
});

const store = configureStore({ reducer: { initial: initSlice.reducer } });

export const initActions = initSlice.actions;

export default store;
