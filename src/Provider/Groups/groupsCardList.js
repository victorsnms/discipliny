import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useToast } from "@chakra-ui/react";

const GroupsCardListContext = createContext();

export const GroupsCardsProvider = ({ children }) => {
  const toast = useToast();
  const [groupsCardList, setGroupsCardList] = useState([]);
 
  const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

  useEffect(() => {
    api
      .get("/groups/")
      .then((res) => setGroupsCardList(res.data.results)
      )
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

  const addGroup = (newGroup) => {
    api
    .post("/groups/", newGroup, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(
      (response) => {
        setGroupsCardList([...groupsCardList, response.data])
        console.log(response.data)
      }
      
    )
    .catch((err) => console.log(err));
  }

  return (
    <GroupsCardListContext.Provider
      value={{ groupsCardList, addGroup }}
    >
      {children}
    </GroupsCardListContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsCardListContext)
