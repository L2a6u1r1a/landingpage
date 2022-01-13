import { observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { welcomeTexts, welcomeSubTexts } from "../../data/Data";
import { Store } from "../../data/Store";

export const MainText = observer(
  (): ReactElement => (
    <div id="WelcomeTextDiv">
      {welcomeTexts.welcome.map((headline) => (
        <h1
          className={`WelcomeText ${
            !Store.firstEntered ? "TextFirstAnimation" : ""
          }`}
          key={headline}
        >
          {headline}
        </h1>
      ))}
      {Store.navigationElementInFocus
        ? welcomeSubTexts[Store.navigationElementInFocus].map((subheadline) => (
            <h4
              className={`WelcomeSubText ${
                !Store.firstEntered ? "TextFirstAnimation" : ""
              }`}
              key={subheadline}
            >
              {subheadline}
            </h4>
          ))
        : welcomeSubTexts.welcome.map((subheadline) => (
            <h4
              className={`WelcomeSubText ${
                !Store.firstEntered ? "TextFirstAnimation" : ""
              }`}
              key={subheadline}
            >
              {subheadline}
            </h4>
          ))}
    </div>
  )
);
