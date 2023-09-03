"use client";

import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export default function SocialIcons(props) {
  // Use the prop 'url' to set the URL of the social icon
  const { url, fgColor } = props;

  return (
    <div className="mx-3">
      {/* Use the URL provided through the prop 'url'. */}
      <SocialIcon fgColor={fgColor} url={url} />
    </div>
  );
}
