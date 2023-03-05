import { configureStore } from '@reduxjs/toolkit'
import appSlice from './reducers/appSlice'
import loginSlice from './reducers/loginSlice'
import otpSilce from './reducers/otpSilce'

export const store = configureStore({
  reducer: {
    otp : otpSilce,
    app : appSlice,
    login : loginSlice,
  },
})