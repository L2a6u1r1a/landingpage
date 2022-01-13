import React, { ReactElement } from "react";
import { dataContents } from "../../data/Data";
import { dataAreaType } from "../../data/Types";
import { PersonalDataElement } from "./PersonalDataElement";

export const PersonalData = (): ReactElement => (
  <div id="PersonalData" className="Content">
    {Object.keys(dataContents).map((content, index) => (
      <PersonalDataElement key={index} dataArea={content as dataAreaType} />
    ))}
  </div>
);
