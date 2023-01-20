import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || "";

  props.href = props.href.replace(/\/$/, "");

  if (router.asPath.split('?')[0] == props.href) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link legacyBehavior {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
