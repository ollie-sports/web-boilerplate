import React, { ReactElement } from "react";
import _ from "lodash-es";
import { stylesheet } from "typestyle";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

export function App(): ReactElement {
  console.log(_.map([])); //Verifies that tree shaking is working...
  return (
    <div className={classes.wrapper}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

const classes = stylesheet({
  wrapper: {
    flex: 1,
  },
});
