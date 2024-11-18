import React from "react";

const SmoothScrollButton = ({ btnName, targetId, cssClasses }) => {
  // used instead of relying on css cause sometimes "scroll-behavior" css fails
  const smoothScrollTo = () => {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      className={cssClasses}
      type="button"
      onClick={smoothScrollTo}
    >
      {btnName}
    </button>
  );
};

export default SmoothScrollButton;
