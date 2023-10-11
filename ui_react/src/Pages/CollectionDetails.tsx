import { useLoaderData } from "react-router-dom";
import { CollectionType } from "../types";
import MediaList from "../Components/MediaList";

const CollectionDetails = () => {
  const collection = useLoaderData() as CollectionType;

  return (
    <div>
      <h1>{collection.title}</h1>
      {collection.movies.length === 0 ? (
        <>
          <h2>Movies</h2>
          <h2>No movies in collection to show</h2>
        </>
      ) : (
        <MediaList
          shouldShowMedias={true}
          mediaType="movie"
          medias={collection.movies}
        />
      )}
      {collection.series.length === 0 ? (
        <>
          <h2>Series</h2>
          <h2>No series in collection to show</h2>
        </>
      ) : (
        <MediaList
          shouldShowMedias={true}
          mediaType="series"
          medias={collection.series}
        />
      )}
    </div>
  );
};

export default CollectionDetails;
