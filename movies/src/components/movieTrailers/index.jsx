import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieVideos } from "../../api/tmdb-api";
import Spinner from "../spinner";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MovieTrailers = ({ id }) => {
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["videos", id],
        queryFn: () => getMovieVideos(id),
});

if (isLoading) return <Spinner />;
if (isError) return <h1>{error.message}</h1>;
    
      
const trailers = data?.results?.filter((video) => video.type === "Trailer" && video.site === "YouTube"
  ) || [];

      if (!trailers.length) return <Typography> No trailers found </Typography>;

      return (
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Trailer
          </Typography>
          {trailers.map((trailer) => (
            <Box key={trailer.id} sx={{ mb: 3 }}>
              <Typography variant="subtitle1">{trailer.name}</Typography>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          ))}
        </Box>
      );
    };

    export default MovieTrailers;