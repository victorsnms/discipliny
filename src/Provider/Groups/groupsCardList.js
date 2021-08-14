import { createContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useToast } from "@chakra-ui/react";

export const GroupsCardListContext = createContext([]);

export const GroupsCardsProvider = ({ children }) => {
  const toast = useToast();
  const [groupsCardList, setGroupsCardList] = useState([]);
  // console.log(groupsCardList);
  useEffect(() => {
    api
      .get("/groups/")
      .then((res) => setGroupsCardList(res.data.results))
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
    <GroupsCardListContext.Provider value={{ groupsCardList }}>
      {children}
    </GroupsCardListContext.Provider>
  );
};
