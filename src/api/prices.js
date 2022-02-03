import { axiosClient } from "src/helpers/axiosClient";

export const getAllPrices = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get("price/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getOtherPrices = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get("price/other/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updatePrice = async (id, price) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    `price/admin/${id}`,
    {
      price,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const togglePrice = async (id, price) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    `price/admin/toggle/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const updateOtherPrices = async (id, price) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    `price/other/admin/${id}`,
    {
      price,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
