import adminServices from "../../services/adminServices";

const usersLoader = async () => {
    try {
        const response = await adminServices.getAllUsers();
        return response.data;
    } catch (error) {
        return [];
    }
}

export default usersLoader;