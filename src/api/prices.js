import { axiosClient } from "src/helpers/axiosClient";

export const getAllPrices = async () => {
  console.log("Hola")
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

export const getDocumentPrice = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(
    "product-price/document",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const getBlueprintPrice = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(
    "product-price/blueprint",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const updateBasePrice = async (updated, newPrice) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    "product-price/base", {
    updated,
    newPrice
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const updateCustomPrice = async (updated, newPrice) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    "product-price/custom-size", {
    updated,
    newPrice
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const getPosterPrice = async () => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.get(
    "product-price/poster",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const updateDocumentBasePrice = async (updated, newPrice) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    "product-price/document/base", {
    updated,
    newPrice
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const updateDocumentLaminatePrice = async (updated, newPrice) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    "product-price/document/laminate", {
    updated,
    newPrice
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const updateDocumentCrimpPrice = async (updated, newPrice) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    "product-price/document/crimp", {
    updated,
    newPrice
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

export const updateDocumentFolderPrice = async (updated, newPrice) => {
  const token = localStorage.getItem("token");
  const res = await axiosClient.patch(
    "product-price/document/folder", {
    updated,
    newPrice
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}
