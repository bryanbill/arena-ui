import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PageLoader } from "../shared/components";
import api from "../shared/hooks/api";
import { storeAuthToken, getStoredAuthToken } from "../shared/utils/authToken";
import toast from "../shared/utils/toast";

const Authenticate = () => {
  const history = useHistory();

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        //@ts-ignore
        const { token } = await api.get("/auth/");
        storeAuthToken(token);
        history.push("/");
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };

    if (!getStoredAuthToken()) {
      createGuestAccount();
    }
  }, [history]);

  return <PageLoader />;
};

export default Authenticate;
