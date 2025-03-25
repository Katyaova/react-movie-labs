import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist"; 

const MustWatchMoviesPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["mustwatch-discover"],
    queryFn: getMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  // Filter movies with the mustWatch flag
  const mustWatchMovies = movies.filter((m) => m.mustWatch);

  // Save to localStorage (optional)
  localStorage.setItem("mustwatch", JSON.stringify(mustWatchMovies));

  // Placeholder function to match structure
  const addToMustWatch = (movieId) => true;

  return (
    <PageTemplate
      title="My Must Watch Playlist"
      movies={mustWatchMovies}
      action={(movie) => <AddToPlaylistIcon movie={movie} />}
    />
  );
};

export default MustWatchMoviesPage;
