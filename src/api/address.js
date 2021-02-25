import { axiosClient } from "../helpers/axiosClient";

export const getAddress = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(`address/admin/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
