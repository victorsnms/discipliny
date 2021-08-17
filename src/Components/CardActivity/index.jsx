import { CardActivity } from "./styles";

const ActivityCard = ({ activity }) => {

  const editDate = new Date(activity.realization_time).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })
  return (
    <CardActivity>
      <div className="flex-row">
        <h1 className="activityName">{activity.title}Activity Name</h1>

        <div>
          <p>{editDate}</p>
        </div>
      </div>
    </CardActivity>
  );
};

export default ActivityCard;
