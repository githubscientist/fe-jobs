import instance from "./instance";

const authServices = {
    register: async (userData) => {
        return await instance.post('/auth/register', userData);
    },
    login: async (userData) => {
        return await instance.post('/auth/login', userData);
    },
    logout: async () => {
        return await instance.post('/auth/logout');
    },
    me: async () => {
        return await instance.get('/auth/me');
    }
}

export default authServices;