import React from "react";
import * as _ from "lodash-es";

export const App: React.FC<{ blah: number }> = (p) => {
  console.log(_.map([]));
  return <div>Waddup world {p.blah}</div>;
};
