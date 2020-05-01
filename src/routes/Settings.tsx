import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { stylesheet } from "typestyle";
import { RouteWrapper } from "../components/RouteWrapper";

export function Settings(): ReactElement {
  return (
    <RouteWrapper className={classes.wrapper}>
      <div>Settings page...</div>
      <Link to="/">Go to home</Link>
    </RouteWrapper>
  );
}

const classes = stylesheet({
  wrapper: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
