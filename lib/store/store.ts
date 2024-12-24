import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from '@/lib/store/features/collectionSlice';
import uiReducer from '@/lib/store/features/uiSlice';
import buttonReducer from '@/lib/store/features/buttonSlice';

const debugMiddleware = (store: any) => (next: any) => (action: any) => {
    console.log('Before Action:', action.type, store.getState());
    const result = next(action);
    console.log('After Action:', action.type, store.getState());
    return result;
};

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            collection: collectionReducer,
            ui: uiReducer,
            button: buttonReducer,
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({
                serializableCheck: false, // Temporarily disable for debugging
                immutableCheck: true, // Keep enabled to catch mutation issues
            }).concat(debugMiddleware),
        devTools: process.env.NODE_ENV !== 'production',
    });

    console.log('Initial Store State:', store.getState());
    
    return store;
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
