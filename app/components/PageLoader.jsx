/**
 * A component that displays a loading spinner animation.
 * @param {Object} props - The props object for the component.
 * @param {number} props.size - The size of the spinner animation in pixels.
 * @returns {JSX.Element} - A React JSX element representing the PageLoader component.
 */
import React from "react";

const PageLoader = ({ size }) => {
  return (
    <div className="w-[50%] flex-center h-10">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="animate-spin"
      >
        <div className="h-full w-full border-4 border-t-white-500 border-b-white-700 rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default PageLoader;
