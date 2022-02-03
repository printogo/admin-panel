import { axiosClient } from "src/helpers/axiosClient";

export const getAllSchedules = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get("schedule/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateSchedule = async (id, body) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(`schedule/admin/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
