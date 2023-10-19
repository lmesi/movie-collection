import { Link, useSubmit } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import "./Card.css";

type ICardProps = {
  posterUrl: string;
  title: string;
  pathName: string;
  id: number;
};

const Card: React.FC<ICardProps> = ({ posterUrl, title, pathName, id }) => {
  const submit = useSubmit();

  const handleDelete = () => {
    submit(
      { intent: "delete", id },
      {
        method: "DELETE",
        action: "/collections",
      }
    );
  };
  return (
    <div className="card-container">
      <IconButton
        color="error"
        onClick={handleDelete}
        id="deleteBtn"
        edge="end"
        type="button"
      >
        <ClearIcon />
      </IconButton>
      <Link to={`${pathName}/${id}`}>
        <img src={posterUrl} alt="media poster" />
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default Card;
