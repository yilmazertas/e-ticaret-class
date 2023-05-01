//// burası redux store kayıt yeri
import {configureStore,combineReducers} from "@reduxjs/toolkit"
import authReducer from "./slice/authSlice"
import productReducer from "./slice/productSlice"


// reducerları ekleyeceğimiz yer
const rootReducer=combineReducers({
 auth:authReducer,
  product: productReducer
})

// burda reducerlar stor a kaydediliyor
const store =configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store