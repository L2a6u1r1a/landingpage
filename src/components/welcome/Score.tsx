import { observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { Store } from "../../data/Store";

export const Score = observer(
  (): ReactElement => (
    <div
      id="Score"
      className={`${
        !Store.gameRunning || Store.currentLocation !== "welcome"
          ? "invisible"
          : ""
      }`}
    >
      <span>{Store.score}</span>
    </div>
  )
);
