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

  const addGoal = (newGoal, setIsToast) => {
    api
      .post(`/goals/`, newGoal, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGoals(response.data.results);
        setIsToast("success");
      })
      .catch((_) => setIsToast("error"));
  };

  const updateGoal = (dados, goalId, setIsToast = "N") => {
    api
      .patch(`/goals/${goalId}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getGoals();
        if (setIsToast === "N") {
          return null;
        } else {
          setIsToast("success");
        }
      })
      .catch((_) => {
        setIsToast("error");
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

  const deleteGoal = (goalId, setIsToast) => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getGoals();
        setIsToast("success");
      })
      .catch((error) => {
        setIsToast("error");
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
