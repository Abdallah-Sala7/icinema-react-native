import { createSlice } from "@reduxjs/toolkit";

initialState = {
  cinema: 0,
  movie: '',
  time: '',
  payment: '',
};


const chosseSlice = createSlice({
  name: 'choose',
  initialState,
  reducers: {
    setCinema: (state, action) => {
      state.cinema = action.payload;
    },
  },
});

export const {setCinema} = chosseSlice.actions;
export default chosseSlice.reducer;
