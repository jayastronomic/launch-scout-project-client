import { request } from "./http/request";

export const loggedInStatus = async () => {
  return await request("/api/v1/logged_in", "GET");
};

export const createAccount = async (payload) => {
  return await request("/api/v1/users", "POST", payload);
};

export const loginUser = async (payload) => {
  return await request("/api/v1/login", "POST", payload);
};

export const logoutUser = async () => {
  return await request("/api/v1/logout", "DELETE");
};
