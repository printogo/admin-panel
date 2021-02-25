import { axiosClient } from "src/helpers/axiosClient";

export const login = async (email, password) => {
  const res = await axiosClient.post("auth/login", {
    email,
    password,
  });
  console.log(res.data);
  return res.data;
};
