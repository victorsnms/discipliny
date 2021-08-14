import { createContext, useContext, useState } from "react";
import api from "../../Services/api";
import jwt_decode from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const getUser = () => {
    const userId = JSON.parse(localStorage.getItem("@Discipliny:userId"));

    api
      .get(`/users/${userId}/`)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "@Discipliny:Nameuser",
          JSON.stringify(response.data.username)
        );
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //api não deixa trocar a senha
  const updateUserFunc = (dados) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    const userId = JSON.parse(localStorage.getItem("@Discipliny:userId"));
    api
      .patch(`/users/${userId}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem(
          "@Discipliny:userId",
          JSON.stringify(response.data.id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  const decodeToken = token => {
    const {user_id} = jwt_decode(token)
    localStorage.setItem("@Discipliny:userId",JSON.stringify(user_id))
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUserFunc,
        getUser,
        decodeToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
