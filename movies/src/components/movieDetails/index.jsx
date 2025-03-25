import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import RecommendIcon from "@mui/icons-material/ThumbUpAlt";
import PeopleIcon from "@mui/icons-material/People";
import MovieIcon from "@mui/icons-material/Movie";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

import MovieReviews from "../movieReviews";
import MovieRecommendations from "../movieRecommendations";
import MovieCredits from "../movieCredits";
import MovieTrailers from "../movieTrailers";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};

const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [recDrawerOpen, setRecDrawerOpen] = useState(false);
  const [creditsDrawerOpen, setCreditsDrawerOpen] = useState(false);
  const [trailerDrawerOpen, setTrailerDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
        </li>
        {movie.production_countries.map((country) => (
          <li key={country.iso_3166_1}>
            <Chip label={country.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      {/* Reviews Button */}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
          zIndex: 1000,
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>

      {/* Recommendations Button */}
      <Fab
        color="primary"
        variant="extended"
        onClick={() => setRecDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "5em",
          right: "1em",
          zIndex: 1000,
        }}
      >
        <RecommendIcon />
        Recommendations
      </Fab>
      <Drawer
        anchor="top"
        open={recDrawerOpen}
        onClose={() => setRecDrawerOpen(false)}
      >
        <MovieRecommendations id={movie.id} />
      </Drawer>

      {/* Cast Button */}
      <Fab
        color="info"
        variant="extended"
        onClick={() => setCreditsDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "9em",
          right: "1em",
          zIndex: 1000,
        }}
      >
        <PeopleIcon />
        Cast
      </Fab>
      <Drawer
        anchor="top"
        open={creditsDrawerOpen}
        onClose={() => setCreditsDrawerOpen(false)}
      >
        <MovieCredits id={movie.id} />
      </Drawer>

      {/* Trailer Button */}
      <Fab
        color="info"
        variant="extended"
        onClick={() => setTrailerDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "13em",
          right: "1em",
          zIndex: 1000,
        }}
      >
        <MovieIcon />
        Watch Trailer
      </Fab>
      <Drawer
        anchor="top"
        open={trailerDrawerOpen}
        onClose={() => setTrailerDrawerOpen(false)}
      >
        <MovieTrailers id={movie.id} />
      </Drawer>
    </>
  );
};

export default MovieDetails;
