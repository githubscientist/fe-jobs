import instance from "./instance";

const jobServices = {
    getAllJobs: async () => {
        return await instance.get('/jobs');
    },
    applyJob: async (jobId) => {
        return await instance.post(`/applications/${jobId}`);
    }
}

export default jobServices;