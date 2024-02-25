import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
	appLoading: boolean;
	appSideBarOpen: boolean;
}
const initialState: initialStateType = {
	appLoading: false,
	appSideBarOpen: false,
};

export const rootSlice = createSlice({
	name: 'rootReducer',
	initialState: initialState,
	reducers: {
		SET_LOADING: (state: initialStateType, action: PayloadAction<boolean>) => {
			state.appLoading = action.payload;
		},
		SET_MOBILE_SIDE_BAR: (state: initialStateType, action: PayloadAction<boolean>) => {
			state.appSideBarOpen = action.payload;
		},
	},
});

export const { SET_LOADING, SET_MOBILE_SIDE_BAR } = rootSlice.actions;
export default rootSlice.reducer;
