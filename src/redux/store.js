import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './features/audioSlice';

const store = configureStore({
    reducer: {
        audio: audioReducer,
    },
});
// Ê, mi biết mấy file ni có chức năng chi không ?
//
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// export { store }
export default store;
