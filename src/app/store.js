import { configureStore } from '@reduxjs/toolkit'
import otpSilce from './reducers/otpSilce'

export const store = configureStore({
  reducer: {
    otp :otpSilce
  },
})