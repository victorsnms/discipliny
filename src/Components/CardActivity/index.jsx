import { CardActivity } from "./styles";

const ActivityCard = ({ name }) => {
  return (
    <CardActivity>
      <div className="flex-row">
        <h1 className="activityName">{name}Activity Name</h1>

        <div className="RightLabel">
          <p>Date</p>
        </div>
      </div>
    </CardActivity>
  );
};

export default ActivityCard;
