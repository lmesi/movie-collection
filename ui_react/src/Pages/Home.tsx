import { useState } from "react";
import MediaList from "../Components/MediaList";
import "./Home.css";

function Home() {
  const [shouldShowMovies] = useState(false);
  const [shouldShowSeries] = useState(false);
  const [shouldShowCollections] = useState(false);
  const movies = [
    {
      id: 1,
      title: "Shrek",
      posterUrl: `../../public/assets/Shrek.jpg`,
    },
    {
      id: 2,
      title: "The Matrix",
      posterUrl: "../../public/assets/The_Matrix.jpg",
    },
    {
      id: 3,
      title: "Fight Club",
      posterUrl: "../../public/assets/Fight_Club.jpg",
    },
  ];
  return (
    <div>
      <MediaList
        mediaType="collection"
        shouldShowMedias={shouldShowCollections}
        medias={movies}
      />
      <MediaList
        mediaType="movie"
        shouldShowMedias={shouldShowMovies}
        medias={movies}
      />
      <MediaList
        mediaType="tv show"
        shouldShowMedias={shouldShowSeries}
        medias={movies}
      />
    </div>
  );
}

export default Home;
