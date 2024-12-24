import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from '@/lib/store/features/collectionSlice';
import uiReducer from '@/lib/store/features/uiSlice';
import buttonReducer from '@/lib/store/features/buttonSlice';


export const makeStore = () => {
    const store = configureStore({
        reducer: {
            collection: collectionReducer,
            ui: uiReducer,
            button: buttonReducer,
        }
    });
    
    return store;
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
