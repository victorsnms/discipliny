import { Grid, GridItem } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import GoalsCreateModal from "../GoalsCreateModal";
import { useToast } from "@chakra-ui/react";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { GiEntryDoor } from "react-icons/gi";
import ActivitiesCreateModal from "../ActivitiesCreateModal";
import {
  Container,
  Title,
  GroupTitle,
  ContainerGoal,
  ContainerDescription,
} from "./groupGrid.styles";
import { useParams } from "react-router-dom";
import GroupUpdateModal from "../GroupUpdateModal";

const GroupGrid = ({
  cardMember,
  CardActivity,
  cardGoal,
  namegroup,
  idGroupSpec,
  description,
  group,
}) => {
  const [isToast, setIsToast] = useState("unset");

  const toast = useToast();
  const user = JSON.parse(localStorage.getItem("@Discipliny:Nameuser"));
  const { getSpecificGroup, subscribeToGroup, specificGroup } = useGroups();
  const { id } = useParams();
  const isOnGroup = !!specificGroup?.users_on_group.find(
    (obj) => obj.username === user
  );
  const creatorGroup = specificGroup?.creator.username === user

  const handleClick = () => {
    subscribeToGroup(setIsToast, idGroupSpec);
    getSpecificGroup(id);
  };

  useEffect(() => {
    if (isToast === "success") {
      toast({
        title: "Inscrição",
        position: "top",
        description: "Agora você está inscrito",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else if (isToast === "error") {
      toast({
        title: "Inscrição",
        position: "top",
        description: "Não conseguimos te inscrever, tente novamente mais tarde",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else if (isToast === "already") {
      toast({
        title: "Inscrição",
        position: "top",
        description: "Você já está inscrito neste Grupo",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }
    setIsToast("unset");
  }, [isToast, isOnGroup]);

  return (
    <Grid
      className="GridContainer"
      h="90%"
      w="100%"
      marginRight="5px"
      templateRows="repeat(9, 1fr)"
      templateColumns="repeat(16, 1fr)"
      gap={2}
    >
      <GridItem
        className="ContainerTitle"
        w="80%"
        placeSelf="center"
        rowSpan={1}
        colSpan={16}
        bg="var(--blue-dark)"
        borderRadius="45px"
      >
        <GroupTitle className="titleGroup">
          {namegroup}
          {isOnGroup ? null : (
            <button className="SubsButton" onClick={handleClick}>
              <GiEntryDoor />
            </button>
          )}
          {creatorGroup && <GroupUpdateModal group={group}/> }
        </GroupTitle>
        <ContainerDescription>
          <p>{description}</p>
        </ContainerDescription>
      </GridItem>
      <GridItem
        className="Grid"
        borderRadius="25px"
        marginTop="45px"
        w="100%"
        minH=""
        justifySelf="center"
        rowSpan={8}
        colSpan={8}
        bg="var(--blue-dark)"
        overflow="hidden"
      >
        {isOnGroup ? (
          <Title>
            Metas
            <GoalsCreateModal />
          </Title>
        ) : (
          <Title>Metas</Title>
        )}

        <ContainerGoal>{cardGoal}</ContainerGoal>
      </GridItem>
      <GridItem
        className="Members"
        borderRadius="25px"
        marginTop="45px"
        rowSpan={4}
        w="100%"
        justifySelf="center"
        colSpan={8}
        backgroundImage="linear-gradient(var(--blue-dark), var(--blue-dark));"
        overflow="hidden"
      >
        <Title>Membros</Title>
        <Container>{cardMember}</Container>
      </GridItem>
      <GridItem
        className="Activity"
        borderRadius="25px"
        marginTop="10px"
        w="100%"
        justifySelf="center"
        rowSpan={4}
        colSpan={8}
        bg="var(--blue-dark)"
        overflow="hidden"
      >
        {isOnGroup ? (
          <Title>
            Atividades
            <ActivitiesCreateModal />
          </Title>
        ) : (
          <Title>Atividades</Title>
        )}

        <Container>{CardActivity}</Container>
      </GridItem>
    </Grid>
  );
};
export default GroupGrid;
