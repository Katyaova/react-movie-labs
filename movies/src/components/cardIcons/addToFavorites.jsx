import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext); // 👈 Access MoviesContext

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie); // 👈 Call the handler from context
  };

  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;

