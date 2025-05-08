import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../features/auth/registerSlice';
import loginReducer from '../features/auth/loginSlice';
import jobReducer from '../features/jobs/jobSlice';

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        job: jobReducer,
    },
})

export default store;