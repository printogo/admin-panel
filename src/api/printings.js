import { axiosClient } from "src/helpers/axiosClient";

export const getPrinting = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axiosClient.get(`print/id/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPrintings = async (orderId) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axiosClient.get(`print/admin/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
