import React from "react";
import { combineReducers } from "redux";

export const songReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2.30" },
    { title: "I want it that way", duration: "1.45" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
