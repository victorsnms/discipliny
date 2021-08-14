import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState();
  const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));

  useEffect(() => {
    if (token) {
        api
        .get("/activities/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setActivities(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const createActivity = (dados) => {
    api
      .post("/activities/", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setActivities([...activities, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateActivity = (dados, activitieId) => {
    api
      .patch(`/activities/${activitieId}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getActivity();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getActivity = () => {
    api
      .get("/activities/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setActivities(response.data)})
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteActivity = (idactivitie) => {
    api
      .delete(`/activities/${idactivitie}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getActivity();
        alert("Aqui ta faltando um toast");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ActivitiesContext.Provider
      value={{
    activities,
        setActivities,
        createActivity,
        updateActivity,
        getActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);

