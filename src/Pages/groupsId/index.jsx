import Menu from "../../Components/MenuAside";
import { Container } from "./groupsid.styles";
import GroupGrid from "../../Components/GroupIdGrid";
import MenuMobile from "../../Components/MenuMobile";
import { Cardmembers } from "./groupsid.styles";
import ActivityCard from "../../Components/CardActivity/index";
import CardGoal from "../../Components/CardGoal";

const Groupsid = () => {
  return (
    <>
      <Container>
        <Menu />
        <div className="cardContainer">
          <GroupGrid
            cardGoal={[1, 2, 3, 4, 4, 5, 65, 6, 7].map((card) => (
              <CardGoal />
            ))}
            cardMember={[1, 2, 3, 4].map((card) => (
              <Cardmembers />
            ))}
            CardActivity={[1, 2, 3, 5, 6, 3].map((card) => (
              <ActivityCard />
            ))}
          ></GroupGrid>
          <MenuMobile />
        </div>
      </Container>
    </>
  );
};

export default Groupsid;
