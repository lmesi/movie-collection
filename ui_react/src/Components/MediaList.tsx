import { MediaType } from "../types";
import CardSvg from "../assets/checklist.svg";
import Card from "./Card";
import "./MediaList.css";

type IMediaListProps = {
  mediaType: string;
  medias: MediaType[];
  shouldShowTitle?: boolean;
  onDelete?: (id: number, type: string) => void;
};

const MediaList: React.FC<IMediaListProps> = ({
  mediaType,
  medias,
  shouldShowTitle = false,
  onDelete,
}) => {
  return (
    <>
      <h2>{mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}</h2>
      {medias.length === 0 && <h3>There's no {mediaType} to show</h3>}
      <div className="list-container">
        {medias.map((media) => (
          <Card
            key={media.id}
            id={media.id}
            posterUrl={media.posterUrl ?? CardSvg}
            pathName={`/${mediaType}`}
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
