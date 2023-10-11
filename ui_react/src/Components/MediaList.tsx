import { MediaType } from "../types";
import CardSvg from "../assets/checklist.svg";
import { Link } from "react-router-dom";

type IMediaListProps = {
  shouldShowMedias: boolean;
  mediaType: string;
  medias: MediaType[];
};

const MediaList: React.FC<IMediaListProps> = ({
  shouldShowMedias,
  mediaType,
  medias,
}) => {
  return (
    <>
      <h2>{mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}</h2>
      {shouldShowMedias && <h3>There's no {mediaType} to show</h3>}
      {medias.map((media) => (
        <Link to={`/${mediaType}/${media.id}`} key={media.title}>
          <img className="poster-img" src={media.posterUrl ?? CardSvg} />
        </Link>
      ))}
    </>
  );
};

export default MediaList;
