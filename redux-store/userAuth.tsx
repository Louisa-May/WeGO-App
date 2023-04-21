/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAunthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAunthenticated: (state, action) => {
      state.isAunthenticated = action.payload;
    },
    resetUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {setUser, resetUser, setIsAunthenticated} = userSlice.actions;

export default userSlice.reducer;
