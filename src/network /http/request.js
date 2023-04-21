const backend = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

export const request = async (path, method, payload, headers = {}) => {
  const API = backend + path;
  const options = {};

  options.method = method;
  if (path !== "/api/v1/logout") {
    options.headers = headers;
    if (!(method === "GET" || method === "DELETE")) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(payload) || {};
    }
  }
  options.credentials = "include";

  const response = await fetch(API, options);
  const data = await response.json();
  return data;
};
