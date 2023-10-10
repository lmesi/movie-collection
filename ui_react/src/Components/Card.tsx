import "./Card.css";

type ICardProps = {
  posterUrl: string;
  title: string;
  pathName: string;
};

const Card: React.FC<ICardProps> = ({ posterUrl, title, pathName }) => {
  return (
    <>
      <a href={pathName}>
        <img src={posterUrl} alt="media poster" />
        <h4>{title}</h4>
      </a>
    </>
  );
};

export default Card;
