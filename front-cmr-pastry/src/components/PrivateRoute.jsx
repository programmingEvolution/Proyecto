import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import ReactLoading from "react-loading";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-julyspastry`,
      });
      localStorage.setItem("token", accessToken);
    };

    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) {
    return <ReactLoading
    type="bars"
    color="#ffe5d9"
    height={"20%"}
    width={"20%"}
  />;
  }

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div className="text-xl bg-red-500">
      No estas autorizado para ver este sitio
    </div>
  );
};
export default PrivateRoute;
