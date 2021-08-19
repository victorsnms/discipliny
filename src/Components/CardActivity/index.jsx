import { CardActivity } from "./styles";
import ActivitiesDeleteModal from "../ActivitiesDeleteModal";
import ActivitiesUpdateModal from "../ActivitiesUpdateModal";

const ActivityCard = ({ activity }) => {
  const editDate = new Date(activity.realization_time).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
  return (
    <CardActivity>
      <div className="flex-row">
        <h1 className="activityName">{activity.title}</h1>

        <p className="activityDate">{editDate}</p>

        <ActivitiesUpdateModal activity={activity} />
        <ActivitiesDeleteModal activity={activity} />
      </div>
    </CardActivity>
  );
};

export default ActivityCard;
