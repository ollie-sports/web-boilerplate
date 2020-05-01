import React, { ReactElement } from "react";
import { stylesheet } from "typestyle";
import { Link } from "react-router-dom";
import { RouteWrapper } from "../components/RouteWrapper";

export function Home(): ReactElement {
  return (
    <RouteWrapper className={classes.wrapper}>
      <div>Home page...</div>
      <Link to="/settings">Go to settings</Link>
    </RouteWrapper>
  );
}

const classes = stylesheet({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
