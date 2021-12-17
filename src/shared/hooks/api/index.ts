import useQuery from "./query";
import useMutation from "./mutation";

/* eslint-disable react-hooks/rules-of-hooks */
export default {
  //@ts-ignore
  get: (...args) => useQuery(...args),
  //@ts-ignore
  post: (...args) => useMutation("post", ...args),
  //@ts-ignore
  put: (...args) => useMutation("put", ...args),
  //@ts-ignore
  patch: (...args) => useMutation("patch", ...args),
  //@ts-ignore
  delete: (...args) => useMutation("delete", ...args),
};
