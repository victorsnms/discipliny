import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    // console.log(token);
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
      })
      .catch((error) => {
        console.log(error);
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
      })
      .catch((error) => {
        console.log(error);
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
        getHabits();
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
