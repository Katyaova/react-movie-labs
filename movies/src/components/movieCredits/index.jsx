import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../../api/tmdb-api";
import Spinner from "../spinner";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";


const MovieCredits = ({ id }) => {
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["credits", id],
    queryFn: () => getMovieCredits(id),
  });


  if (isLoading) return <Spinner />;


  if (isError) return <h1>{error.message}</h1>;

  
  const topCast = data?.cast?.slice(0, 10) || [];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Top Billed Cast
      </Typography>

      <List>
        {topCast.map((actor) => (
          <ListItem key={actor.id}>
            <Avatar
              src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
              alt={actor.name}
              sx={{ marginRight: 2 }}
            />
            <ListItemText
              primary={
                <Link
                  href={`https://www.themoviedb.org/person/${actor.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  {actor.name}
                </Link>
              }
              secondary={actor.character}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MovieCredits;


