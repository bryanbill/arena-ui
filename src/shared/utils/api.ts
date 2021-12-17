import axios from "axios";

import history from "../../browserHistory";
import toast from "./toast";
import { objectToQueryString } from "./url";
import { getStoredAuthToken, removeStoredAuthToken } from "./authToken";

const defaults = {
  baseURL: "http://localhost:4041/v1",
  headers: () => ({
    "Content-Type": "application/json",
  }),
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

const api = (method, url, variables) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      withCredentials: true,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          if (error.response.data.error.code === "INVALID_TOKEN") {
            removeStoredAuthToken();
            history.push("/authenticate");
          } else {
            reject(error.response.data.error);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });

const optimisticUpdate = async (
  url,
  { updatedFields, currentFields, setLocalData }
) => {
  try {
    setLocalData(updatedFields);
    await api("put", url, updatedFields);
  } catch (error) {
    setLocalData(currentFields);
    toast.error(error);
  }
};
//TODO: FIX THIS
export default {
  //@ts-ignore
  get: (...args) => api("get", ...args),
  //@ts-ignore
  post: (...args) => api("post", ...args),
  //@ts-ignore
  put: (...args) => api("put", ...args),
  //@ts-ignore
  patch: (...args) => api("patch", ...args),
  //@ts-ignore
  delete: (...args) => api("delete", ...args),
  optimisticUpdate,
};
