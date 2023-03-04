import { configureStore } from '@reduxjs/toolkit'
import appSlice from './reducers/appSlice'
import otpSilce from './reducers/otpSilce'

export const store = configureStore({
  reducer: {
    otp : otpSilce,
    app : appSlice
  },
})