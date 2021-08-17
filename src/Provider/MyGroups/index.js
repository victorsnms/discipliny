import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useToast } from "@chakra-ui/react";

const MyGroupsCardListContext = createContext();

export const MyGroupsCardsProvider = ({ children }) => {
  const toast = useToast();
  const [myGroupsList, setMyGroupsList] = useState([]);
  const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

  const createNewGroup = (dados) => {
    api
      .post("/groups/", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyGroupsList([...myGroupsList, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getGroups() {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyGroupsList(response.data);
        localStorage.setItem(
          "@Discipliny:idGroup",
          JSON.stringify(response.data.id)
        );
      })
      .catch((_) => {});
  }

  const updateMyGroup = (dados, groupId) => {
    api
      .patch(`/groups/${groupId}`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getGroups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MyGroupsCardListContext.Provider
      value={{
        myGroupsList,
        setMyGroupsList,
        createNewGroup,
        updateMyGroup,
        getGroups,
      }}
    >
      {children}
    </MyGroupsCardListContext.Provider>
  );
};

export const useMyGroups = () => useContext(MyGroupsCardListContext);
