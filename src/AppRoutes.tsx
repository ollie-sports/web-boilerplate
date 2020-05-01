import React, { ReactElement } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { AnimatePresence, motion } from "framer-motion";
import { Settings } from "./routes/Settings";
import { stylesheet } from "typestyle";

export function AppRoutes(): ReactElement {
  const loc = useLocation();
  return (
    <motion.div
      className={classes.fadeWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence initial={false}>
        <Switch key={loc.pathname} location={loc}>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
}

const classes = stylesheet({
  fadeWrapper: {},
});
