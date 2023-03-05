import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: AsyncStorage.getItem("token") ? true : false,
  token: '',
  user: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    }
  },
});

export const {setLogin} = loginSlice.actions;
export default loginSlice.reducer;