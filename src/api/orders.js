import { axiosClient } from "src/helpers/axiosClient";

export const getOrders = async (
  status = "ALL",
  page = 1,
  sort = "createdAt",
  sortOrder = "DESC",
  quantity = 20,
  searchField = "",
  searchValue = ""
) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(
    `/order/admin?status=${status}&page=${page}&sort=${sort}&sortOrder=${sortOrder}&quantity=${quantity}&searchField=${searchField}&searchValue=${searchValue}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const getOrdersUser = async (
  userId,
  status = "ALL",
  page = 1,
  sort = "createdAt",
  sortOrder = "DESC",
  quantity = 20,
  searchField = "",
  searchValue = ""
) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(
    `/order/admin/${userId}?status=${status}&page=${page}&sort=${sort}&sortOrder=${sortOrder}&quantity=${quantity}&searchField=${searchField}&searchValue=${searchValue}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const updateStatus = async (orderId, status) => {
  const token = localStorage.getItem("token");
  await axiosClient.patch(
    `/order/admin/${orderId}?status=${status}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const changeStationeryOrder = async (orderId, newStaioneryId) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    `/order/admin/${orderId}/stationery/${newStaioneryId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
