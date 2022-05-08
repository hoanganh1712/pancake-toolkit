import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };

  const handleClick = (e: any) => {
    if(href === '/comingsoon') {
      e.preventDefault()
      return;
    }
  }
  return <Tag role="button" {...props} {...otherProps}  onClick={handleClick} />;
};

export default MenuLink;
