import { Grid, GridItem } from "@chakra-ui/layout";
import GoalsCreateModal from "../GoalsCreateModal";
import ActivitiesCreateModal from "../ActivitiesCreateModal";

import {
  Container,
  Title,
  GroupTitle,
  ContainerGoal,
} from "./groupGrid.styles";

const GroupGrid = ({ cardMember, CardActivity, cardGoal, namegroup }) => {
  return (
    <Grid
      h="90%"
      w="100%"
      marginRight="5px"
      templateRows="repeat(9, 1fr)"
      templateColumns="repeat(16, 1fr)"
      gap={2}
    >
      <GridItem w="80%" placeSelf="center" rowSpan={1} colSpan={16}>
        <GroupTitle className="titleGroup">Nome: {namegroup}</GroupTitle>
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
      >
        <Title>
          Goals
          <GoalsCreateModal />
        </Title>

        <ContainerGoal>{cardGoal}</ContainerGoal>
      </GridItem>
      <GridItem
        borderRadius="25px"
        marginTop="45px"
        rowSpan={4}
        w="100%"
        justifySelf="center"
        colSpan={8}
        backgroundImage="linear-gradient(var(--blue-dark), var(--blue-dark));"
      >
        <Title>Members</Title>
        <Container>{cardMember}</Container>
      </GridItem>
      <GridItem
        borderRadius="25px"
        marginTop="10px"
        w="100%"
        justifySelf="center"
        rowSpan={4}
        colSpan={8}
        bg="var(--blue-dark)"
      >
        <Title>
          activities
          <ActivitiesCreateModal />
        </Title>
        <Container>{CardActivity}</Container>
      </GridItem>
    </Grid>
  );
};
export default GroupGrid;
