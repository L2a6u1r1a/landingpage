import { observer } from "mobx-react-lite";
import React, { ReactElement, useEffect } from "react";
import { Store } from "../../data/Store";

export const Rabbit = observer((): ReactElement => {
  useEffect(() => {
    Store.checkAndHobbleInStart();
  }, []);

  return (
    <div
      className={`${Store.hobbleAnimationRunning ? "hobble" : ""} ${
        Store.leaveAnimationRunning ? "leave" : ""
      } ${
        !Store.hobbleAnimationRunning && !Store.leaveAnimationRunning
          ? "live"
          : ""
      } ${Store.waitingForEnterOrLeaveAnimationRunning ? "invisible" : ""}`}
      id="RabbitDiv"
      onAnimationEnd={(e) => {
        if (e.animationName === "hobble") {
          Store.hobbleInEnd();
        }
        if (e.animationName.startsWith("leave")) {
          Store.navigateExternalStart();
        }
      }}
    >
      <span
        onTouchStart={(e) => {
          Store.checkAndGameStart();
          Store.eatStart(true);
          e.stopPropagation();
        }}
        onClick={(e) => {
          Store.checkAndGameStart();
          Store.eatStart(true);
          e.stopPropagation();
        }}
      >
        🐇
      </span>
    </div>
  );
});
