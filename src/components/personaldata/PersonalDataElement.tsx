import { observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { dataContents } from "../../data/Data";
import { Store } from "../../data/Store";
import { dataAreaType, IDataRecord } from "../../data/Types";

export const PersonalDataElement = observer(
  ({ dataArea }: { dataArea: dataAreaType }): ReactElement => (
    <div
      id={dataArea}
      className={`PersonalDataElement ${
        Store.dataElementInFocus === dataArea
          ? "PersonalDataElement--focused"
          : "PersonalDataElement--notFocused"
      }`}
      onClick={() => {
        Store.checkAndSetDataElementInFocus(dataArea);
      }}
    >
      {Store.dataElementInFocus === dataArea ? (
        dataContents[dataArea].dataLayoutType === "block" ? (
          dataContents[dataArea].dataRecords.map((el, i) => {
            if (el.dataType === "headline") {
              return <h2 key={i}>{el.value}</h2>;
            } else if (el.dataType === "subheadline") {
              return <h3 key={i}>{el.value}</h3>;
            } else {
              return <p key={i}>{el.value}</p>;
            }
          })
        ) : (
          dataContents[dataArea].dataRecords.map((el, i) => {
            if (el.dataType === "headline") {
              return (
                <div>
                  <h2 key={i}>{el.value}</h2>
                </div>
              );
            } else if (el.dataType === "text") {
              return <p key={i}>{el.value}</p>;
            } else if (el.dataType === "block") {
              return (
                <div>
                  {(el.value as IDataRecord[]).map((subEl, j) => {
                    if (subEl.dataType === "subheadline") {
                      return <h3 key={j}>{subEl.value}</h3>;
                    } else {
                      return <p key={j}>{subEl.value}</p>;
                    }
                  })}
                </div>
              );
            }
          })
        )
      ) : (
        <h1>{dataContents[dataArea].dataRecords[0].value}</h1>
      )}
    </div>
  )
);
