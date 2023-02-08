import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

import filterReducer from '../features/filter/filterSlice';

 const store = configureStore({
   reducer: {
  [apiSlice.reducerPath]: apiSlice.reducer,  
    filter: filterReducer,   
  },
   middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
 });

 export default store;

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
// });

// export default store;