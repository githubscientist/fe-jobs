import instance from "./instance";

const jobServices = {
    getAllJobs: async () => {
        return await instance.get('/jobs');
    },
}

export default jobServices;