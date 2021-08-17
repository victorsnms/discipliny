import Menu from "../../Components/MenuAside";
import { Container } from "./groupsid.styles";
import GroupGrid from "../../Components/GroupIdGrid";
import MenuMobile from "../../Components/MenuMobile";
import CardMember from "../../Components/CardMember";
import ActivityCard from "../../Components/CardActivity/index";
import CardGoal from "../../Components/CardGoal";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { Redirect } from "react-router-dom";
import { useLogged } from "../../Provider/Login";
import { useGoals } from "../../Provider/Goals";
import { useEffect } from "react";
import { useActivities } from "../../Provider/Activities";

const Groupsid = () => {
  const { specificGroup, getSpecificGroup } = useGroups();
  const { goals } = useGoals();
  const { logged } = useLogged();
  const { activities, getActivity } = useActivities();

  useEffect(() => {
    getSpecificGroup();
    getActivity()
  }, [goals,activities]);

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
                specificGroup.goals.map((goal) => (
                  <CardGoal key={goal.id} goal={goal} />
                ))
              ) : (
                <p>Sem metas por aqui...</p>
              )
            }
            cardMember={
              specificGroup !== undefined
                ? specificGroup.users_on_group.map((card) => (
                    <CardMember key={card.id} member={card.username} />
                  ))
                : null
            }
            CardActivity={
              specificGroup !== undefined ? (
                specificGroup.activities.map((card) => (
                  <ActivityCard key={card.id} activity={card} />
                ))
              ) : (
                <p>Sem atividades, tudo tranquilo...</p>
              )
            }
            namegroup={specificGroup !== undefined ? specificGroup.name : null}
            idGroupSpec={specificGroup !== undefined ? specificGroup.id : null}
          ></GroupGrid>
          <MenuMobile />
        </div>
      </Container>
    </>
  );
};

export default Groupsid;
