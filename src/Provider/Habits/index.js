import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
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

  const createHabit = (dados, setIsToast) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .post("/habits/", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setIsToast("success");
        setHabit([...habit, response.data]);
      })
      .catch((_) => {
        setIsToast("error");
      });
  };

  const updateHabit = (dados, habitId, setIsToast = "N") => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .patch(`/habits/${habitId}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getHabits();
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

  const deleteHabit = (idHabit, setIsToast) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .delete(`/habits/${idHabit}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getHabits();
        setIsToast("success");
      })
      .catch((error) => {});
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
