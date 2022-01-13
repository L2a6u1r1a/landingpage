import { observer } from "mobx-react-lite";
import React, { ReactElement, useEffect } from "react";
import { Store } from "../data/Store";
import { PersonalData } from "./personaldata/PersonalData";
import { Footer } from "./navigation/Footer";
import { Welcome } from "./welcome/Welcome";
import { Cursor } from "./cursor/Cursor";

export const App = observer((): ReactElement => {
  useEffect(() => {
    Store.init();
  }, []);
  if (Store.initialised) {
    return (
      <div id="App">
        <Cursor />
        {Store.currentLocation === "personal" ? <PersonalData /> : <Welcome />}
        <Footer />
      </div>
    );
  } else {
    return (
      <div id="App">
        <Cursor />
      </div>
    );
  }
});
