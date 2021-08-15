import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useToast } from "@chakra-ui/react";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const toast = useToast();

  const [habit, setHabit] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

    if (token) {
      api
        .get("/habits/personal/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setHabit(response.data);

          if (response.data.length === 0) {
            return null;
          } else {
            localStorage.setItem(
              "@Discipliny:userId",
              JSON.stringify(response.data[0].user)
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const createHabit = (dados) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .post("/habits/", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabit([...habit, response.data]);
        toast({
          title: "Hábitos",
          position: "top",
          description: "Criado Novo Hábito",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((_) => {
        toast({
          title: "Hábito não foi criado!",
          description: "Verifique todo os campos e tente novamente",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };

  const updateHabit = (dados, habitId) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .patch(`/habits/${habitId}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getHabits();
        toast({
          title: "Hábitos",
          position: "top",
          description: "Atualização Concluída",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((_) => {
        toast({
          title: "Hábito não foi atualizado!",
          description: "Verifique todo os campos e tente novamente",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const getHabits = () => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabit(response.data);

        localStorage.setItem(
          "@Discipliny:userId",
          JSON.stringify(response.data[0].user)
        );
      })
      .catch((error) => {
        toast({
          title: "Hábitos",
          description: "Hábitos não foram carregados",
          position: "top",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const deleteHabit = (idHabit) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .delete(`/habits/${idHabit}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getHabits();
        toast({
          title: "Hábito Excluído",
          description: "Exclusão efetuada com sucesso",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Exclusão Pendente",
          position: "top",
          description: "Não foi possível excluir",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <HabitsContext.Provider
      value={{
        habit,
        setHabit,
        createHabit,
        updateHabit,
        getHabits,
        deleteHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
