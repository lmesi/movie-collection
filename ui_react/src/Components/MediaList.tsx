import { MediaType } from "../types";
import CardSvg from "../assets/checklist.svg";
import Card from "./Card";
import "./MediaList.css";

type IMediaListProps = {
  shouldShowMedias: boolean;
  mediaType: string;
  medias: MediaType[];
  shouldShowTitle?: boolean;
  onDelete?: (id: number, type: string) => void;
};

const MediaList: React.FC<IMediaListProps> = ({
  shouldShowMedias,
  mediaType,
  medias,
  shouldShowTitle = false,
  onDelete,
}) => {
  return (
    <>
      <h2>{mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}</h2>
      {!shouldShowMedias && <h3>There's no {mediaType} to show</h3>}
      <div className="list-container">
        {medias.map((media) => (
          <Card
            key={media.id}
            id={media.id}
            posterUrl={media.posterUrl ?? CardSvg}
            pathName={`/${mediaType}/${media.id}`}
            title={shouldShowTitle ? media.title : undefined}
            onDelete={
              onDelete
                ? () =>
                    onDelete(
                      media.id,
                      mediaType === "movies" ? "movie" : mediaType
                    )
                : undefined
            }
          />
        ))}
      </div>
    </>
  );
};

export default MediaList;

/* <Link to={`/${mediaType}/${media.id}`} key={media.title}>
            <img className="poster-img" src={media.posterUrl ?? CardSvg} />
          </Link> */
