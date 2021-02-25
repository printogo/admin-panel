import { axiosClient } from "src/helpers/axiosClient";

export const getAllStationerys = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get("stationery/admin/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateStationery = async (id, active) => {
  const token = localStorage.getItem("token");
  return await axiosClient.put(
    "stationery/admin",
    {
      id,
      active,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};


export const addStationery = async (body) => {
  const token = localStorage.getItem("token");
  return await axiosClient.put(
    "stationery/admin",
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
