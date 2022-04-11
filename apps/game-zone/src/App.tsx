import React from "react";

import { Shell } from "ui";
import { CardPicker, TopNumber } from "games";

function App() {
  return (
    <Shell title="Game Zone">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem",
        }}
      >
        <CardPicker />
        <TopNumber />
      </div>
    </Shell>
  );
}

export default App;
