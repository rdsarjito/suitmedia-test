import placeholder from "../../assets/placeholder.png";
import LazyImage from "../lazy_image";
import { formatDate } from "../../utils/date";
import "./index.style.scss";

const Card = (props: { title: string; image: string; date: string }) => {
  return (
    <div className="card">
      <div className="card_image">
        <LazyImage
          src={props.image}
          alt={props.title}
          fallbackSrc={placeholder}
        />
      </div>
      <div className="card_content">
        <p>{formatDate(props.date)}</p>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default Card;
