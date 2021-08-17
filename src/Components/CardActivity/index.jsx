import { CardActivity } from "./styles";
import ActivitiesDeleteModal from "../ActivitiesDeleteModal";
import ActivitiesUpdateModal from "../ActivitiesUpdateModal";
const ActivityCard = ({ activity }) => {
  return (
    <CardActivity>
      <div className="flex-row">
        <h1 className="activityName">{activity.title}</h1>
        <ActivitiesDeleteModal activity={activity} />
        <ActivitiesUpdateModal activity={activity} />
        <div className="RightLabel">
          <p>Date</p>
        </div>
      </div>
    </CardActivity>
  );
};

export default ActivityCard;
