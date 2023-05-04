/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAunthenticated: false,
  groupMembers: null,
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
    setGroupMembersRedux: (state, action) => {
      state.groupMembers = action.payload;
    },
    resetGroupMembers: state => {
      state.groupMembers = null;
    },
    resetUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  resetUser,
  setIsAunthenticated,
  setGroupMembersRedux,
  resetGroupMembers,
} = userSlice.actions;

export default userSlice.reducer;
