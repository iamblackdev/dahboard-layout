import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
	userState: any;
	token: string | null;
}
const initialState: initialStateType = {
	userState: {},
	token: null,
};

export const rootSlice = createSlice({
	name: 'authReducer',
	initialState: initialState,
	reducers: {
		SET_USER_DATA: (state: initialStateType, action: PayloadAction<any>) => {
			state.userState = action.payload;
		},
		SET_USER_TOKEN: (state: initialStateType, action: PayloadAction<string | null>) => {
			state.token = action.payload;
		},
	},
});

export const { SET_USER_DATA, SET_USER_TOKEN } = rootSlice.actions;
export default rootSlice.reducer;
