import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  otpCode: {
    1: '',
    2: '',
    3: '',
    4: '',
  },
};

export const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtp: (state, action) => {
      state.otpCode = {...state.otpCode, [action.payload.key]: action.payload.value};
    },
  },
});

export const {setOtp} = otpSlice.actions;
export default otpSlice.reducer;
