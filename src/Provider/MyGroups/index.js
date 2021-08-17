import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useToast } from "@chakra-ui/react";

const MyGroupsCardListContext = createContext();

export const MyGroupsCardsProvider = ({ children }) => {
  const toast = useToast();
  const [myGroupsList, setMyGroupsList] = useState([]);

  const createNewGroup = (dados) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .post("/groups/", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyGroupsList([...myGroupsList, response.data]);

        toast({
          title: "Grupo criado!",
          description: "Seu grupo foi criado com sucesso.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((_) => {
        toast({
          title: "erro ao Criar grupo!",
          description: "Falha ao criar novo grupo",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const getGroups = () => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyGroupsList(response.data);
        // localStorage.setItem(
        //   "@Discipliny:groupId",
        //   JSON.stringify(response.data.id)
        // );
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Erro ao carregar grupo!",
          description: "Erro ao carregar grupos",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  useEffect(() => {
    getGroups();
  }, []);

  const updateMyGroup = (dados, groupId) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .patch(`/groups/${groupId}`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getGroups();
      })
      .catch((_) => {
        toast({
          title: "erro ao Criar grupo!",
          description: "Erro ao atualizar grupos",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
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
