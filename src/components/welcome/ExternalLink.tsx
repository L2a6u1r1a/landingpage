import { observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { Store } from "../../data/Store";
export const ExternalLink = observer(
  (): ReactElement => (
    <div
      id="HoleDiv"
      className={`hole`}
      onMouseOver={() =>
        Store.isLeavableLocation() ? Store.setNavigationElementInFocus() : null
      }
      onMouseOut={() => {
        Store.setNavigationElementInFocus(null);
      }}
    >
      {Store.isLeavableLocation() ? (
        <span onClick={() => Store.checkAndSetLeaveAnimation()}>🕳️</span>
      ) : null}
    </div>
  )
);
