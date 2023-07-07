import { configureStore } from "@reduxjs/toolkit";
import unCoverdModals from "../modules/unCoverdModals";

const store = configureStore({
  reducer:{
    unCoverdModals
  }
})

export default store;