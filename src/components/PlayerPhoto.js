import React from "react";

import constructAvatarUrl from "../utils/constructAvatarUrl";
import "../styles/Photo.scss";

const PlayerPhoto = ({ player: { player, github } = {} }) => {
  return (
    <div className="photo">
      <img src={constructAvatarUrl(player)} />
      <p>{github.username}</p>
    </div>
  );
};

export default PlayerPhoto;
