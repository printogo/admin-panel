import { axiosClient } from "src/helpers/axiosClient";

export const login = async (email, password) => {
  const res = await axiosClient.post("auth/login", {
    email,
    password,
  });
  if(res.data.user.role === 'ADMIN') return res.data;
  throw new Error('Wrong credentials')
};
