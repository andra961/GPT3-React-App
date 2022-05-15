import React from "react";
import "./CustomHeader.css";

function CustomHeader({ title }: { title: string }) {
  return <header>{title}</header>;
}

export default CustomHeader;
