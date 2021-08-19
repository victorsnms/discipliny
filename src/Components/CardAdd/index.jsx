import { CardAddWrapper } from "./styles";

const CardAdd = ({...rest}) => {
  return (
    <CardAddWrapper className="ContentHabits" {...rest}>
      <div className="add">
        <p>+</p>
      </div>
    </CardAddWrapper> 
  );
};

export default CardAdd;
