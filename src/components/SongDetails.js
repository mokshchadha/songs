import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (!props.song) return <div>Select A song</div>;
  return (
    <div>
      <h3>{props.song.title}</h3>
      <p>{props.song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
