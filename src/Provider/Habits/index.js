import { createContext, useContext, useState } from "react";
import api from "../../Services/api";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);

  const createHabit = (dados) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .post("/habits/", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabit([...habit, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHabit = (dados, id) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .patch(`/habits/${id}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getHabits();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getHabits = () => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    console.log(token);

    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteHabit = (idHabit) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

    api
      .delete(`/habits/${idHabit}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        alert("Hábito Deletado com sucesso");
      })
      .catch((error) => {
        console.log(error);
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
