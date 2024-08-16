import { axiosClient } from "src/helpers/axiosClient";

export const getStationery = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(`/stationery/admin/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};


export const getAllStationerys = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get("stationery/admin/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateStationery = async (payload) => {
  const token = localStorage.getItem("token");
  return await axiosClient.put(
    "stationery/admin",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateStationeryStatus = async (id, active) => {
  const token = localStorage.getItem("token");
  return await axiosClient.put(
    "stationery/status/admin",
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

export const updateStationeryCosts = async (id, costs) => {
  const token = localStorage.getItem("token");
  return await axiosClient.patch(
    `stationery/admin/costs/${id}`,
    {
      costs
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updatePaymentData = async (id, body) => {
  const token = localStorage.getItem("token");
  return await axiosClient.patch(
    `stationery/admin/payment-data/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateStationeryAccessData = async (id, body) => {
  const token = localStorage.getItem("token");
  return await axiosClient.patch(
    `stationery/admin/access-data/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};


export const addStationery = async (body) => {
  const token = localStorage.getItem("token");
  return await axiosClient.post(
    "stationery",
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};


export const editStationery = async (id, body) => {
  const token = localStorage.getItem("token");
  return await axiosClient.put(
    `admin/stationery/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
