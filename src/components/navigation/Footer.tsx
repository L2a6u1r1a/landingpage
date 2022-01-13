import React, { ReactElement } from "react";
import { navigationLocations } from "../../data/Data";
import { pageLocationType } from "../../data/Types";
import { NavigationElement } from "./NavigationElement";

export const Footer = (): ReactElement => (
  <div
    id="Footer"
    className="gradient--background"
    onClick={(e) => e.stopPropagation()}
  >
    {Object.entries(navigationLocations).map(([locationKey]) => (
      <NavigationElement
        key={locationKey}
        locationKey={locationKey as pageLocationType}
      />
    ))}
  </div>
);
