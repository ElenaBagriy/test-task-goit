import axios from "axios";

axios.defaults.baseURL = "https://644d8194cfdddac970a5fd7b.mockapi.io";

export const UsersAPI = {
  getAll: async () => {
    const { data } = await axios.get(`/users`);
    return data;
  },
  
  updateUser: async ({ userId, userInfo }) => {
    const { data } = await axios.put(`/users/${userId}`, userInfo);
    return data;
  },

  // When it'll be possible to add "isFollowing" on backend-side, we can set pagination in API-requests:

  // getAll: async (page) => {
  //   const { data } = await axios.get(`/users?page=${page}&limit=3`);
  //   return data;
  // },
};
