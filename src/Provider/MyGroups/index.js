import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useToast } from "@chakra-ui/react";

const MyGroupsCardListContext = createContext();

export const MyGroupsCardsProvider = ({ children }) => {
  const toast = useToast();

  const [myGroupsList, setMyGroupsList] = useState([]);

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
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGroups();
  }, []);

  // const updateMyGroup = (dados, groupId) => {
  //   const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
  //   api
  //     .patch(`/groups/${groupId}`, dados, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((_) => {
  //       getGroups();
  //     })
  //     .catch((_) => {
  //       toast({
  //         title: "erro ao Criar grupo!",
  //         description: "Erro ao atualizar grupos",
  //         status: "error",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //     });
  // };

  return (
    <MyGroupsCardListContext.Provider
      value={{
        myGroupsList,
        setMyGroupsList,
        // createNewGroup,
        // updateMyGroup,
        getGroups,
      }}
    >
      {children}
    </MyGroupsCardListContext.Provider>
  );
};

export const useMyGroups = () => useContext(MyGroupsCardListContext);
