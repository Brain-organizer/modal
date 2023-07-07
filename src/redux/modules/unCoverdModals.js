import { createSlice } from "@reduxjs/toolkit";



const unCoveredModals = createSlice({
  name: 'unCoveredModals',
  initialState:[],
  reducers: {
    closeAllModals : () => [],
    openModal : (state,action) => [action.payload],
    closeModal : (state,action) => state.filter((item)=>item!==action.payload)
  }
  }
)

export default unCoveredModals.reducer;
export const {closeAllModals, openModal, closeModal} = unCoveredModals.actions;