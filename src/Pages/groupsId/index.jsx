import Menu from "../../Components/MenuAside";
import { Container } from "./groupsid.styles";
import GroupGrid from "../../Components/GroupIdGrid";
import MenuMobile from "../../Components/MenuMobile";
import { Cardmembers } from "./groupsid.styles";
import ActivityCard from "../../Components/CardActivity/index";
import CardGoal from "../../Components/CardGoal";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { Redirect } from "react-router-dom";
import { useLogged } from "../../Provider/Login";

const Groupsid = () => {
  const { specificGroup } = useGroups();
  const { logged } = useLogged();

  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <Menu />
        <div className="cardContainer">
          <GroupGrid
            cardGoal={
              specificGroup !== undefined ? (
                specificGroup.goals.map((card) => (
                  <CardGoal
                    name={card.title}
                    dificuldade={card.difficulty}
                    idGoal={card.id}
                  />
                ))
              ) : (
                <p>Sem metas por aqui...</p>
              )
            }
            cardMember={
              specificGroup !== undefined
                ? specificGroup.users_on_group.map((card) => (
                    <Cardmembers member={card.users_on_group} />
                  ))
                : null
            }
            CardActivity={
              specificGroup !== undefined ? (
                specificGroup.activities.map((card) => (
                  <ActivityCard name={card.title} />
                ))
              ) : (
                <p>Sem atividades, tudo tranquilo...</p>
              )
            }
            namegroup={specificGroup !== undefined ? specificGroup.name : null}
          ></GroupGrid>
          <MenuMobile />
        </div>
      </Container>
    </>
  );
};

export default Groupsid;
