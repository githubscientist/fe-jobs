import jobServices from "../../services/jobServices";

const jobsLoader = async () => {
    try {
        const response = await jobServices.getAllJobs();
        return response.data;
    } catch (error) {
        return [];
    }
}

export default jobsLoader;