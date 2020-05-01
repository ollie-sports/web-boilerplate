import React, { ReactNode, ReactElement, HtmlHTMLAttributes } from "react";
import c from "classnames";
import { motion } from "framer-motion";
import { stylesheet } from "typestyle";

export function RouteWrapper(p: {
  className?: string;
  children: ReactNode;
}): ReactElement {
  return (
    <motion.div
      className={c(p.className, classes.wrapper)}
      initial="initial"
      animate="in"
      exit="out"
      variants={animation}
      transition={{ duration: 0.3 }}
    >
      {p.children}
    </motion.div>
  );
}

const classes = stylesheet({
  wrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

const animation = {
  initial: {
    x: "100%",
  },
  in: {
    x: "0%",
  },
  out: {
    x: "-100%",
  },
};
