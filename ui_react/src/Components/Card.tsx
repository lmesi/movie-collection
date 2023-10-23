import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import "./Card.css";

type ICardProps = {
  posterUrl: string;
  title?: string;
  pathName: string;
  id: number;
  onDelete?: () => void;
};

const Card: React.FC<ICardProps> = ({
  posterUrl,
  title,
  pathName,
  id,
  onDelete,
}) => {
  return (
    <div className="card-container">
      {onDelete && (
        <IconButton
          color="error"
          onClick={onDelete}
          id="deleteBtn"
          edge="end"
          type="button"
        >
          <ClearIcon />
        </IconButton>
      )}

      <Link to={`${pathName}/${id}`}>
        <img src={posterUrl} alt="media poster" />
        {title && <h4>{title}</h4>}
      </Link>
    </div>
  );
};

export default Card;
