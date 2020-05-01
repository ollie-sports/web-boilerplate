import React, { ReactElement } from "react";
import * as _ from "lodash-es";

export function App(p: { blah: number }): ReactElement {
  console.log(_.map([])); //Verifies that tree shaking is working...
  return <div>Waddup world {p.blah}</div>;
}
