import instance from "./instance";

const authServices = {
    register: async (userData) => {
        return await instance.post('/auth/register', userData);
    }
}

export default authServices;