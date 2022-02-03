import { axiosClient } from "src/helpers/axiosClient";

export const getAllMaintenances = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get("maintenance/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createMaintenance = async (data) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.post("maintenance/admin", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteMaintenance = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.delete("maintenance/admin/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
