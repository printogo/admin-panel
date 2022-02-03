import { axiosClient } from "src/helpers/axiosClient";

export const getAllCoupons = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get("coupons/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createPercentageCoupon = async (body) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.post("coupons/percentage", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createMoneyCoupon = async (body) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.post("coupons/money", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteCoupon = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.delete("coupons/admin/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
