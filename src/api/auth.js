import { axiosClient } from "src/helpers/axiosClient";

export const login = async (email, password) => {
  const res = await axiosClient.post("auth/login", {
    email,
    password,
  });
  if (res.data.user.role === 'ADMIN') return res.data;
  throw new Error('Wrong credentials')
};

export const getUserData = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const res = await axiosClient.get("auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 401) {
      localStorage.removeItem('token')
      return false;
    }
    return true;
  } catch (error) {
    throw new Error("Something went wrong")
  }
}