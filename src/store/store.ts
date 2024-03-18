import { configureStore } from "@reduxjs/toolkit";
import { cartAPI } from "./cartAPI";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { cartReducer } from "./cartSlice";


export const store = configureStore({
    reducer: {
        cartStore: cartReducer,
        [cartAPI.reducerPath]: cartAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().
            concat([
                cartAPI.middleware,
            ])
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
