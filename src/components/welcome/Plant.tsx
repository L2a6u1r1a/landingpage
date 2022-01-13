import { observer } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { IPlant } from "../../data/Types";

export const Plant = observer(
  ({ icon, x, y, size, mirrored }: IPlant): ReactElement => (
    <div
      className={`Plant`}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: `scale(${mirrored ? -1 : 1}, 1)`,
        fontSize: `${size}px`,
      }}
    >
      {icon}
    </div>
  )
);
