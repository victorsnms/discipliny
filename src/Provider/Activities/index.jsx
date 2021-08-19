import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
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

  const createActivity = (dados, setIsToast) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .post("/activities/", dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setActivities([...activities.results, response.data]);
        setIsToast("success")
      })
      .catch((error) => {
        setIsToast("error");
      });
  };

  const updateActivity = (dados, activitieId, setIsToast) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .patch(`/activities/${activitieId}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getActivity();
        setIsToast("success");
      })
      .catch((_) => {
        setIsToast("error");
      });
  };

  const getActivity = () => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
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
  };

  const deleteActivity = (idactivitie, setIsToast) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .delete(`/activities/${idactivitie}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        getActivity();
        setIsToast("success");
      })
      .catch((error) => {
        setIsToast("error");
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
