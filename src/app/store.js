import { configureStore} from "@reduxjs/toolkit";
import { productAPI } from "./services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware)
})
setupListeners(store.dispatch);
export default store;