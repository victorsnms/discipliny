import { toast } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

  useEffect(() => {
    api
      .get(`/goals/`)
      .then((response) => {
        setGoals(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addGoal = (newGoal) => {
    api
      .post(`/goals/`, newGoal, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGoals(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const updateGoal = (dados, goalId) => {
    api
      .patch(`/goals/${goalId}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getGoals();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGoals = () => {

    api
      .get("/goals/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGoals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteGoal = (idGoal) => {
    api
      .delete(`/goals/${idGoal}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getGoals();
        toast({
          title: "Sucesso!",
          position: "top",
          description: "Meta Excluída",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        addGoal,
        updateGoal,
        getGoals,
        deleteGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
