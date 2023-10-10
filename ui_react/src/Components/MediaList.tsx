import { MediaType } from "../types";

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
      <h2>{mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}s</h2>
      {shouldShowMedias && <h3>There's no {mediaType} to show</h3>}
      {medias.map((media) => (
        <a key={media.title}>
          <img className="poster-img" src={media.posterUrl} />
        </a>
      ))}
    </>
  );
};

export default MediaList;
