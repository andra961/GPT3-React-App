import React from "react";

import "./CustomButton.css";

function CustomButton({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <div className="button" title={title} onClick={onClick}>
      {title}
    </div>
  );
}

export default CustomButton;
