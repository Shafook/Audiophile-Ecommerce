import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      if (state.info && state.info.some((e) => e.tag === action.payload.tag)) {
        state.info = state.info.map((e) => {
          if (e.tag === action.payload.tag) {
            return action.payload;
          }
          return e;
        });
      } else {
        state.info = [...state.info, action.payload];
      }
    },
  },
});

export const selectInfo = (state) => state.form.info;

export const { setInfo } = formSlice.actions;

export default formSlice.reducer;
