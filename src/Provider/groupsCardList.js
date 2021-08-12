import { createContext, useEffect, useState } from "react";
import api from "../Services/api";
import { useToast } from "@chakra-ui/react";

export const GroupsCardListContext = createContext([]);

export const GroupsCardsProvider = ({ children }) => {
  const toast = useToast();
  const [groupsCardList, setGroupsCardList] = useState([]);
  const addToGroupsCardList = (item) => {
    setGroupsCardList([...groupsCardList, item]);
  };
  useEffect(() => {
    api
      .get("/groups/")
      .then((res) => setGroupsCardList(res.data))
      .catch((_) =>
        toast({
          title: "falha ao carregar grupos",
          description: "Não possível encontrar nenhum grupo",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  }, []);
  return (
    <GroupsCardListContext value={{ addToGroupsCardList, groupsCardList }}>
      {children}
    </GroupsCardListContext>
  );
};
