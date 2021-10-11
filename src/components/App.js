import React from "react";

import players from "../../data/**/*.json";

import descriptionBorderInner from "../../assets/images/DescriptionBorder_Inner.png";
import descriptionBorderOuter from "../../assets/images/DescriptionBorder_Outer.png";
import "../styles/App.scss";

import PlayerPhoto from "./PlayerPhoto";
import NineSlice from "./NineSlice";

const App = () => {
  return (
    <main>
      <NineSlice
        imageUrl={descriptionBorderOuter}
        contentClassNames="outerNineSliceContent"
      >
        <h1>Operator Photo Gallery</h1>
        <NineSlice
          imageUrl={descriptionBorderInner}
          contentClassNames="nineSliceContent"
        >
          {Object.entries(players).map(([key, player]) => (
            <PlayerPhoto key={key} player={player} />
          ))}
        </NineSlice>
      </NineSlice>
    </main>
  );
};

export default App;
