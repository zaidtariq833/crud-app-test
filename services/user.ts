import api from "@/api/client";
import { TypeLogin } from "@/types";

export const loginUser = async (data: TypeLogin) => {
  const res = await api.post("/user/login", data, {
    skipAuth: true,
  });
  return res;
};
