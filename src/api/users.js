import { axiosClient } from "src/helpers/axiosClient";

export const getUserById = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(`auth/admin/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getUsers = async (
  options = {
    page: 1,
    quantity: 20,
    sort: "createdAt",
    sortOrder: "DESC",
    search: {
      field: "",
      value: "",
    },
  },
  role = 'ALL'
) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.post(`auth/admin/users/${role.toUpperCase()}`, options, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
