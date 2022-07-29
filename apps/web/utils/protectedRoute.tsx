import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const ProtectedRoute = ({ user = false, children }) => {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    login && router.push("/auth"); //or router.replace("/account/login");
  }, [login, router]);

  useEffect(() => {
    !user && setLogin(true);
  }, [user]);

  return (
    <>
      {user ? (
        children
      ) : (
        <div>
          <h4>
            You are not Authorized. <a>Please log in</a>
          </h4>
        </div>
      )}
    </>
  );
};
