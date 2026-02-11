import api from "@/api/client";

export const getProducts = async () => {
  const data = await api.get("product/get-all-products");
  return data;
};
