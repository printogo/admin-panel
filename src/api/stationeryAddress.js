import { axiosClient } from "../helpers/axiosClient";

export const getStationeryAddress = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(`address/admin/stationery/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
