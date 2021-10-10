import React from "react";

import rmkubik from "../../data/rmkubik.json";
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
          {new Array(20).fill("").map(() => (
            <PlayerPhoto player={rmkubik} />
          ))}
        </NineSlice>
      </NineSlice>
    </main>
  );
};

export default App;
