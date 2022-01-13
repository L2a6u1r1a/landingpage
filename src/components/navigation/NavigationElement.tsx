import { observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { navigationLocations } from "../../data/Data";
import { Store } from "../../data/Store";
import { pageLocationType } from "../../data/Types";

export const NavigationElement = observer(
  ({ locationKey }: { locationKey: pageLocationType }): ReactElement => (
    <div
      key={locationKey}
      className={`NavigationElement ${
        Store.navigationElementInFocus === locationKey
          ? "NavigationElement--hovered"
          : ""
      }`}
      onMouseOver={() => Store.setNavigationElementInFocus(locationKey)}
      onMouseOut={() => {
        Store.setNavigationElementInFocus(null);
      }}
      onClick={() => {
        Store.setNavigation(locationKey);
      }}
    >
      {navigationLocations[locationKey]}
    </div>
  )
);
