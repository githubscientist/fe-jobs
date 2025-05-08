import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: 'job',
    initialState: {
        jobs: []
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
        },
        updateJob: (state, action) => {
            const index = state.jobs.findIndex(job => job.id === action.payload.id);
            if (index !== -1) {
                state.jobs[index] = { ...state.jobs[index], ...action.payload };
            }
        }
    }
});

export const { setJobs, addJob, removeJob, updateJob } = jobSlice.actions;

export const selectJobs = (state) => state.job.jobs;

export default jobSlice.reducer;