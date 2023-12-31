import { useLoaderData, useParams, useSubmit } from "react-router-dom";
import { CollectionType } from "../types";
import MediaList from "../Components/MediaList";
import "./CollectionDetails.css";

const CollectionDetails = () => {
  const collection = useLoaderData() as CollectionType;
  const { id } = useParams();
  const submit = useSubmit();

  const handleDelete = (mediaId: number, type: string) => {
    submit(
      { mediaId, type },
      {
        method: "DELETE",
        action: `/collections/${id}`,
      }
    );
  };

  return (
    <div>
      <h1>{collection.title}</h1>
      {collection.movies.length === 0 ? (
        <>
          <h2>Movies</h2>
          <h3>No movies in collection to show</h3>
        </>
      ) : (
        <MediaList
          mediaType="movies"
          medias={collection.movies}
          onDelete={handleDelete}
        />
      )}
      {collection.series.length === 0 ? (
        <>
          <h2>Series</h2>
          <h3>No series in collection to show</h3>
        </>
      ) : (
        <MediaList
          mediaType="series"
          medias={collection.series}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CollectionDetails;
