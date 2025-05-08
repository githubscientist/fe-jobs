import jobServices from "../../services/jobServices";
import authServices from "../../services/authServices";

const jobsLoader = async () => {
    try {
        const jobResponse = await jobServices.getAllJobs();
        const userResponse = await authServices.me();
        return {
            jobs: jobResponse.data,
            user: userResponse.data,
        }
    } catch (error) {
        return [];
    }
}

export default jobsLoader;