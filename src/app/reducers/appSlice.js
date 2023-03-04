const { createSlice } = require("@reduxjs/toolkit");

initialState = {
  openSearch:false
}

const appSlice = createSlice({
  name:'app',
  initialState,
  reducers:{
    setOpenSearch : (state, action) =>{
      state.openSearch = action.payload
    }
  }
})

export const {setOpenSearch} = appSlice.actions
export default appSlice.reducer