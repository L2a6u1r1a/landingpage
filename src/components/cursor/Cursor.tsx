import { action } from "mobx";
import { observer } from "mobx-react-lite";
import React, { ReactElement, useEffect } from "react";
import { Store } from "../../data/Store";

let mousePosition = [-100, -100];
let start: number | undefined;

const step = action((timestamp: number): void => {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (elapsed < 400) {
    start = undefined;
    if (
      Store.gameRunning &&
      Store.followHidden &&
      (mousePosition[0] !== Store.mousePosition.x ||
        mousePosition[1] !== Store.mousePosition.y)
    ) {
      Store.followHidden = false;
    }
    Store.mousePosition = { x: mousePosition[0], y: mousePosition[1] };
    window.requestAnimationFrame(step);
  }
});
window.requestAnimationFrame(step);

export const Cursor = observer((): ReactElement => {
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = (): void => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchcancel", onMouseUp);
  };

  const removeEventListeners = (): void => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("touchstart", onMouseDown);
    document.removeEventListener("touchend", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
  };

  const onMouseMove = action((e: MouseEvent): void => {
    mousePosition = [e.clientX, e.clientY];
    Store.mouseHidden = false;
  });

  const onTouchMove = action((e: TouchEvent): void => {
    mousePosition = [e.touches[0].clientX, e.touches[0].clientY];
  });

  const onMouseEnter = action((): void => {
    Store.mouseHidden = false;
  });

  const onMouseLeave = action((): void => {
    Store.mouseHidden = true;
  });

  const onMouseDown = action((): void => {
    Store.mouseClicked = true;
  });

  const onMouseUp = action((): void => {
    Store.mouseClicked = false;
  });

  return (
    <React.Fragment>
      <div
        className={`cursor ${Store.mouseHidden ? "invisible" : ""} ${
          Store.navigationElementInFocus ? "cursor--element-hovered" : ""
        }${Store.mouseClicked ? "cursor--clicked" : ""} `}
        style={{
          left: `${Store.mousePosition.x}px`,
          top: `${Store.mousePosition.y}px`,
        }}
      >
        🥕
      </div>
      <div
        className={`cursor--follow ${
          Store.mouseHidden || Store.followHidden ? "invisible" : ""
        } `}
        style={{
          left: `${Store.mousePosition.x}px`,
          top: `${Store.mousePosition.y}px`,
          transition: "0.2s",
        }}
        onTransitionEnd={action(() => {
          Store.followHidden = true;
          Store.eatStart(false);
        })}
      >
        {"🐰"}
      </div>
    </React.Fragment>
  );
});
