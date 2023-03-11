import { createSlice } from "@reduxjs/toolkit";

initialState = {
  movie: '',
  cinema: '',
  chair:[],
  payment: '',
};


const chosseSlice = createSlice({
  name: 'choose',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },

    setCinema: (state, action) => {
      state.cinema = action.payload;
    },

    setChair: (state, action) => {
      const index = state.chair.findIndex(([a, b]) => a === action.payload[0] && b === action.payload[1]);

      if (index >= 0) {
        state.chair.splice(index, 1);
      } else {
        state.chair.push(action.payload);
      }
    },

    setPayment: (state, action) => {
      if (state.payment === action.payload) {
        state.payment = '';
      } else {
        state.payment = action.payload;
      }
    }
  },
});

export const {setCinema, setChair, setMovie, setPayment} = chosseSlice.actions;
export default chosseSlice.reducer;
