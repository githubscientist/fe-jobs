import instance from "./instance";

const adminServices = {
    getAllUsers: async () => {
        return await instance.get('/users');
    },
}

export default adminServices;