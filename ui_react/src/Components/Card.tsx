import { Link } from "react-router-dom";
import "./Card.css";

type ICardProps = {
  posterUrl: string;
  title: string;
  pathName: string;
  id: number;
};

const Card: React.FC<ICardProps> = ({ posterUrl, title, pathName, id }) => {
  return (
    <div className="card-container">
      <Link to={`${pathName}/${id}`}>
        <img src={posterUrl} alt="media poster" />
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default Card;
