import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";

const GroupsCardListContext = createContext();

export const GroupsCardsProvider = ({ children }) => {
  const [groupsCardList, setGroupsCardList] = useState([]);
  const [specificGroup, setSpecificGroup] = useState();
  const [url, setUrl] = useState("https://kabit-api.herokuapp.com/groups/");
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    api
      .get(url)
      .then((res) => {
        setGroupsCardList(res.data.results);
        setPrev(res.data.previous);
        setNext(res.data.next);
      })
      .catch((error) => console.log(error));
  }, [url]);

  const prevPage = () => {
    if (prev !== null) {
      setUrl(prev);
    }
  };
  const nextPage = () => {
    if (next !== null) {
      setUrl(next);
    }
  };

  const addGroup = (newGroup, setIsToast) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    console.log(token);
    api
      .post("/groups/", newGroup, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGroupsCardList([...groupsCardList, response.data]);
        setIsToast("success");
      })
      .catch((_) => setIsToast("error"));
  };

  const getSpecificGroup = (idGroup) => {
    api
      .get(`groups/${idGroup}/`)
      .then((response) => {
        setSpecificGroup(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateGroup = (dados, id, setIsToast) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .patch(`/groups/${id}/`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getSpecificGroup(id);
        setIsToast("success");
      })
      .catch((_) => {
        setIsToast("error");
      });
  };

  const subscribeToGroup = (setIsToast, idGroupSpec) => {
    const token = JSON.parse(localStorage.getItem("@Discipliny:accessToken"));
    api
      .post(`/groups/${idGroupSpec}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getSpecificGroup();
        setIsToast("success");
      })
      .catch((error) => {
        if (error.response.data.message === "User already on group") {
          setIsToast("already");
        } else {
          setIsToast("error");
        }
      });
  };

  return (
    <GroupsCardListContext.Provider
      value={{
        groupsCardList,
        addGroup,
        prevPage,
        nextPage,
        getSpecificGroup,
        specificGroup,
        updateGroup,
        subscribeToGroup,
      }}
    >
      {children}
    </GroupsCardListContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsCardListContext);
