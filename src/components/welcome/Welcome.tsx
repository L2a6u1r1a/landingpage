import { observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { Store } from "../../data/Store";
import { ExternalLink } from "./ExternalLink";
import { MainText } from "./MainText";
import { Plant } from "./Plant";
import { Rabbit } from "./Rabbit";
import { Score } from "./Score";

export const Welcome = observer(
  (): ReactElement => (
    <div
      id="Welcome"
      className="Content"
      onTouchStart={(e) => {
        Store.tryAndPlantPlant(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onClick={(e) => {
        Store.tryAndPlantPlant(e.clientX, e.clientY);
      }}
    >
      {Store.currentLocation === "welcome"
        ? Store.plants.map((plant, i) => {
            const { x, y, icon, plantKey, size, mirrored, live } = plant;
            return (
              <Plant
                key={i}
                x={x}
                y={y}
                icon={icon}
                plantKey={plantKey}
                size={size}
                mirrored={mirrored}
                live={live}
              />
            );
          })
        : null}
      <div id="WelcomeTop">
        <MainText />
        <Rabbit />
        <Score />
      </div>
      <div id="WelcomeBottom">
        <ExternalLink />
      </div>
    </div>
  )
);
