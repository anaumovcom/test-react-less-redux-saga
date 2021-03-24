import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import textReducer from "./reducers/textSlice";

// export const store = configureStore({
//     reducer: {
//         text: textReducer,
//     }
// })
//

export const store = createStore(textReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
