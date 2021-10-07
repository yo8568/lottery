import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { title } = props;
  return (
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Dashboard",
};

export default Header;
