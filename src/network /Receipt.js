import { request } from "./http/request";

export const fetchAuthUserReceipts = async () => {
  return await request("/api/v1/receipts", "GET");
};

export const createReceipt = async (payload) => {
  return await request("/api/v1/receipts", "POST", payload);
};
