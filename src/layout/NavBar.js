import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectOpenMenu, toggleMenu } from '@/store/slice/layout';

function NavBar(props) {
  const { menuList } = props;
  const openMenu = useSelector(selectOpenMenu);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0" onClick={() => history.push('/')}>
              <img
                class="h-8 w-8 rounded-md"
                src={process.env.PUBLIC_URL + 'lottory-favicon.jpeg'}
                alt="Workflow"
              />
            </div>

            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                {menuList.map((item) => (
                  <a
                    key={`web_${item.name}`}
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(item.url);
                    }}
                    class={
                      window.location.pathname === item.url
                        ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile  */}
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => handleToggleMenu()}
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {openMenu && (
        <div class="md:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuList.map((item) => (
              <a
                key={`web_${item.name}`}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  history.push(item.url);
                }}
                class={
                  window.location.pathname === item.url
                    ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                }
                aria-current="page"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

NavBar.propTypes = {
  menuList: PropTypes.array,
};

NavBar.defaultProps = {
  menuList: [],
};

export default NavBar;
