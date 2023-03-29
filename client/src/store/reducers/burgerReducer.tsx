import { createSlice } from "@reduxjs/toolkit";

interface stateI {
  isActive: boolean
}

const initialState: stateI = {
  isActive: false,
}

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toActive(state) {
      state.isActive = true
    },
    toDiactive(state) {
      state.isActive = false
    }
  }
})


export const { toActive, toDiactive } = burgerSlice.actions
export default burgerSlice.reducer