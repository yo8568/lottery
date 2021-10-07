import React from "react";
import PropTypes from "prop-types";

function MainContent(props) {
  const { children } = props;
  return <main class="max-w-7xl mx-auto p-6 sm:px-6 lg:px-8">{children}</main>;
}

MainContent.propTypes = {
  children: PropTypes.any,
};

MainContent.defaultProps = {
  children: (
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>
    </div>
  ),
};

export default MainContent;
